'use client';

import { useState } from 'react';
import styles from './admin.module.scss';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa6';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Admin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [loginFailed, setLoginFailed] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('he', email, password);
        try {
            setIsLoading(true);
            const response = await axios.post(
                'http://localhost:4000/admin-login',
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status === 200) {
                console.log('This is response: ', response, typeof response.status);
                setIsVerified(true);
                setLoginFailed(false);
            }
            setIsLoading(false);
            console.log('setloadingfalse');
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                setLoginFailed(true);
                setIsVerified(false);
            }
            setIsLoading(false);
            console.log('setloadingfalse');
        }
    };

    // const toggleVerify = () => {
    //     setIsVerified((prev) => !prev);
    // };
    console.log(email, password);
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
                {/* <button onClick={toggleVerify}> toggle verify</button> */}
                {/* {isLoading ? (
                    <span className={styles.loading}>
                        <AiOutlineLoading3Quarters size="2rem" />
                    </span>
                ) : (
                    ''
                )} */}
                <span className={`${isLoading ? styles.loading : ''} ${styles.loadingIcon}`}>
                    <AiOutlineLoading3Quarters size="2rem" />
                </span>
                {loginFailed ? <span className={styles.loginFailed}>Login Failed</span> : ''}
                {isVerified ? <span className={styles.verified}>Admin verified</span> : ''}
            </div>
        </div>
    );
}
