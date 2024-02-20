import Image from 'next/image';
import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.containerWrap}>
            <div className={styles.overlayWrap}>
                <div className={styles.imageContainer}>
                    <Image src="/woman-phone.png" alt="Woman on the phone" width={400} height={395} />
                </div>
                <div className={styles.contactContainer}>zostaje na outside nawet kiedy pada deeeszcz</div>
            </div>
        </div>
    );
}
{
    /* <Image src="/logo3.png" alt="Small logo" width={40} height={40} />: */
}
