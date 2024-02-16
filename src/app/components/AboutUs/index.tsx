import styles from './AboutUs.module.scss';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

export default function AboutUs() {
    return (
        <main className={`${styles.containerWrap} ${dmSans.className}`}>
            <h2 className={styles.title}>Kim jesteśmy?</h2>
            <h3 className={styles.description}>
                <Image src="/logo3.png" alt="Small logo" width={40} height={40} />:
                <span>
                    Jesteśmy firmą specjalizującą się w pośrednictwie w obrocie nieruchomościami oraz ich wycenie.
                    <br />
                    Pasjonujemy się nieruchomościami i podejmujemy się każdego klienta z indywidualnym podejściem. Nasza firma oferuje kompleksowe doradztwo w zakresie inwestowania
                    w nieruchomości, a współpracujemy z wieloma specjalistami, aby efektywnie zarządzać rynkiem nieruchomości i oszczędzać czas oraz pieniądze naszych klientów.
                    Posiadamy wszystkie niezbędne uprawnienia zawodowe, zgodne z obowiązującymi przepisami prawnymi.
                </span>
            </h3>
            <div className={styles.descriptionFooter}>
                <div>
                    <Link href="#opinie">
                        <span>Zadowolony klient</span> to cel naszej pracy!
                    </Link>
                </div>
            </div>
        </main>
    );
}
