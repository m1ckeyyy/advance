'use client';

import { useEffect, useState } from 'react';
import styles from './admin.module.scss';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { redirect } from 'next/navigation';
import { isRedirectError } from 'next/dist/client/components/redirect';
//@ts-ignore
//import Cookies from 'js-cookie';

export default function Admin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [loginFailed, setLoginFailed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isVerified) redirect('/edit-offers');
    }, [isVerified]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await axios.post(
                'http://127.0.0.1:4000/admin-login',
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status === 200) {
                setIsVerified(true);
                setLoginFailed(false);
                //redirect('/');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                setLoginFailed(true);
                setIsVerified(false);
            }
            //this line avoids nextjs unwanted behaviour after redirection
            if (isRedirectError(error)) {
                throw error;
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.containerWrap}>
            <div className={styles.inputBox}>
                <h2>Login via admin account</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type="submit">
                        <FaArrowRight size="1.5rem" color="white" />
                    </button>
                </form>
                <span className={`${isLoading ? styles.loading : ''} ${styles.loadingIcon}`}>
                    <AiOutlineLoading3Quarters size="2rem" />
                </span>
                {loginFailed ? <span className={styles.loginFailed}>Login Failed</span> : ''}
                {isVerified ? <span className={styles.verified}>Admin verified</span> : ''}
            </div>
        </div>
    );
}
