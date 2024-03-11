'use client';

import { useState } from 'react';
import styles from './admin.module.scss';
import axios from 'axios';

export default function Admin() {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        console.log(e);
        axios
            .get('https://worldtimeapi.org/api/ip')
            .then((res) => {
                console.log('xd: ', res);
                if (res.status === 200) {
                    //to be adjusted
                }
                setIsVerified(true);
            })
            .catch((err: string) => {
                console.log('Error: ', err);
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
    const callAPI = async (e: any) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    const toggleVerify = () => {
        setIsVerified((prev) => !prev);
    };
    return (
        <div className={styles.containerWrap}>
            <div className={styles.inputBox}>
                <form onSubmit={handleSubmit}>
                    <h2>hey</h2>
                    <button type="submit">click me</button>
                </form>
                <div className={isVerified ? styles.verified : ''}>{isVerified ? 'User verified' : 'User not verified'}</div>
                <button onClick={toggleVerify}> toggle verify</button>
            </div>
        </div>
    );
}
