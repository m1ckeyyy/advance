import styles from './LandingPage.module.scss';
import NavBar from '@/app/components/NavBar';
import StyledLines from './components/StyledLines';
import { IoLanguage } from 'react-icons/io5';
import { Mochiy_Pop_One, Work_Sans } from 'next/font/google';
import Image from 'next/image';

const mochiyPopOne = Mochiy_Pop_One({ subsets: ['latin'], weight: '400' });
const workSans = Work_Sans({ subsets: ['latin'], weight: '200' });

export default function LandingPage() {
    return (
        <main className={styles.containerWrap}>
            <StyledLines />
            <NavBar />
            <div className={styles.heroContent}>
                <div className={styles.leftContent}>
                    <h1 className={`${mochiyPopOne.className}`}>
                        <div>
                            <span className={styles.najem}>NAJEM</span>
                        </div>
                        <div>
                            <span className={styles.wynajem}>WYNAJEM</span>
                        </div>
                        <div>
                            <span className={styles.sprzedaz}>SPRZEDAZ</span>
                        </div>
                        <div>
                            <span className={styles.zakup}>ZAKUP</span>
                        </div>
                    </h1>
                    <div
                        className={`${styles.offersHyperlink} ${workSans.className}`}
                    >
                        <h3>Sprawdź</h3>
                        <h2>Aktualne oferty</h2>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.imgWrap}>
                        <Image
                            src="/sample-man.png"
                            width={554}
                            height={451}
                            alt="man"
                            className={styles.manImg}
                        />
                        <p className={styles.name}>
                            Ziutek Ziutkowski,
                            <br />
                            Advance Nieruchomości
                        </p>
                    </div>
                    <div
                        className={`${styles.statisticsInfo} ${workSans.className}`}
                    >
                        <div>
                            <span>180+</span> <br />
                            sprzedanych mieszkań
                        </div>
                        <div>
                            <span>15 lat</span>
                            <br /> doświadczenia
                        </div>
                        <div>
                            <span>15,000+</span> <br />
                            podpisanych umów
                        </div>
                    </div>
                </div>

                <div className={styles.languageIcon} title="Change language">
                    <IoLanguage size="30" />
                </div>
            </div>
        </main>
    );
}
