import styles from './Footer.module.scss';
import { DM_Sans } from 'next/font/google';
import { FaFacebook } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

export default function Footer() {
    return (
        <div className={`${styles.containerWrap} ${dmSans.className}`}>
            <div className={styles.rightsReserved}>
                <h4>© {new Date().getFullYear()} Advance | Wszelkie prawa zastrzeżone.</h4>
            </div>
            <div className={styles.contactRow}>
                <span className={styles.rowHeader}>Kontakt</span>
                <span>Advance Nieruchomości</span>
                <span>ul. Walerego Sławka 16C/L2</span>
                <span>+48 535 772 875</span>
                <span>biuro@advance.nieruchomosci.pl</span>
            </div>
            <div className={styles.navigationRow}>
                <span className={styles.rowHeader}>Nawiguj</span>
                <span>
                    <Link href="#offers">Oferty</Link>
                </span>
                <span>
                    <Link href="#o-nas">O nas</Link>
                </span>
                <span>
                    <Link href="#opinie">Opinie</Link>
                </span>
                <span>
                    <Link href="#kontakt">Kontakt</Link>
                </span>
            </div>
            <div className={styles.facebook} title="Facebook">
                <Link href={'https://www.facebook.com/profile.php?id=100057415211111'} target="_blank">
                    <FaFacebook size="2rem" color="white" />
                </Link>
            </div>
        </div>
    );
}
