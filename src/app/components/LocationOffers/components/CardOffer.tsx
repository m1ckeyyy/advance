import styles from './CardOffer.module.scss';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

const CardOffer = ({ imgsrc, name, classReference }: { imgsrc: string; name: string; classReference: string }) => {
    return (
        <Link href="/offers">
            <div className={`${styles.cardOffer} ${dmSans.className} ${styles[classReference]} `}>
                <Image src={imgsrc} width={512 * 1.15} height={398 * 1.21} alt={name} className={styles.image} />
                <span>{name}</span>
            </div>
        </Link>
    );
};

export default CardOffer;
