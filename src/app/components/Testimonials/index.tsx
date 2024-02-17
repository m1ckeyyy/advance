import styles from './Testimonials.module.scss';

export default function Testimonials() {
    return (
        <div className={styles.containerWrap}>
            <div className={styles.header}>
                Nie ufaj <span>nam</span>, zaufaj naszym <span>klientom</span>
            </div>
            <div className={styles.firstMessageContainer}>
                <div className={styles.firstMessage}>
                    <span>
                        Nie mogę się nadziwić, jak ekspresowo agencja nieruchomości przeprowadziła nas przez cały proces, od pierwszego mojego telefonu do aktu zakupu! W zaledwie 3
                        tygodnie udało nam się znaleźć i kupić wymarzone miejsce.
                    </span>
                </div>
            </div>
            <div className={styles.secondMessageContainer}>
                <div className={styles.secondMessage}>
                    <span>
                        Advance Nieruchomości to prawdziwy profesjonalizm. Z pasją i zaangażowaniem pomogli w realizacji marzeń o własnym mieszkaniu. Szybkość przeprowadzanych
                        transakcji oraz łatwość komunikacji z agentem sprawiają, że każde spotkanie to czysta przyjemność 😀
                    </span>
                </div>
            </div>
            <div className={styles.thirdMessageContainer}>
                <div className={styles.thirdMessage}>
                    <span>
                        Nigdy nie spodziewałem się, że proces zakupu domu może być tak płynny i bezproblemowy. Dzięki dostępności agenta nieruchomości oraz jego błyskawicznej
                        reakcji na nasze zapytania, udało się nam znaleźć wymarzone miejsce bez zbędnych opóźnień.
                    </span>
                </div>
            </div>
            <div className={styles.fourthMessageContainer}>
                <div className={styles.fourthMessage}>
                    <span>
                        Cześć! Chciałam Ci mega podziękować za wsparcie i pomoc przy zakupie mieszkania! Bez Ciebie to wszystko byłoby dużo trudniejsze! Jestem mega zadowolona z
                        naszej współpracy i polecam Cię wszystkim, którzy szukają super agenta nieruchomości! Dzięki jeszcze raz! 😊🔑
                    </span>
                </div>
            </div>
        </div>
    );
}
