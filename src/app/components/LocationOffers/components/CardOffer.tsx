import styles from './CardOffer.module.scss';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

const CardOffer = () => {
    return (
        <div className={`${styles.cardOffer} ${dmSans.className}`}>
            <Image
                src="/krakow.jpg"
                width={512 * 1.15}
                height={398 * 1.15}
                alt="man"
                className={styles.krakowImg}
            />
            <span>Kraków</span>
        </div>
    );
};

export default CardOffer;
