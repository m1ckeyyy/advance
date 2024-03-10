'use client';

import styles from './admin.module.scss';

export default function Admin() {
    //axios
    const handleSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('http://127.0.0.1:8080/login', data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
    const callAPI = async (e: Event) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.containerWrap}>
            <div className={styles.inputBox}>
                <form onSubmit={callAPI}>
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    );
}
