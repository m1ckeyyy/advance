import Image from 'next/image';
import styles from './Contact.module.scss';
import { FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className={styles.containerWrap}>
            <div className={styles.overlayWrap}>
                <div className={styles.imageContainer}>
                    <Image src="/images/woman-phone.png" alt="Woman on the phone" width={400} height={395} />
                </div>
                <div className={styles.contactContainer}>
                    <h3>Skontaktuj się z nami</h3>
                    <FaPhone />
                    Telefon +48 535 772 875
                    <br />
                    Pon - Sobota 9:00 - 19:00
                </div>
            </div>
        </div>
    );
}
{
    /* <Image src="/logo3.png" alt="Small logo" width={40} height={40} />: */
}
