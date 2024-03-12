'use client';

import { useState } from 'react';
import styles from './admin.module.scss';
import axios from 'axios';

export default function Admin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(e);
        axios
            .post('http://localhost:4000/admin', { email, password })
            .then((res) => {
                console.log('xd: ', res);
                if (res.status === 200) {
                    //to be adjusted
                    //res.json()
                }
                setIsVerified(true);
            })
            .catch((err: string) => {
                console.error('Fetching error, message: ', err);
            });

        // try {
        //     const response = await axios.post('http://127.0.0.1:8080/login', data, {
        //         withCredentials: true,
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     });
        // } catch (error) {
        //     console.error(error);
        // }
    };

    // const toggleVerify = () => {
    //     setIsVerified((prev) => !prev);
    // };
    console.log(email, password);
    return (
        <div className={styles.containerWrap}>
            <div className={styles.inputBox}>
                <h2>admin panel</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">submit</button>
                </form>
                {/* <button onClick={toggleVerify}> toggle verify</button> */}
                <div className={`${isVerified ? styles.verified : ''} ${styles['verificationStatus']}`}>{isVerified ? 'User verified' : 'User not verified'}</div>
            </div>
        </div>
    );
}
