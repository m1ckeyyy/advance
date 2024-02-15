import styles from './AboutUs.module.scss';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

export default function AboutUs() {
    return (
        <main className={`${styles.containerWrap} ${dmSans.className}`}>
            <h2 className={styles.title}>Kim jesteśmy?</h2>
        </main>
    );
}
