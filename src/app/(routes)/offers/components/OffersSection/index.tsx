import styles from './OffersSection.module.scss';
export default function OffersSection() {
    //import
    return (
        <div className={styles.containerWrap}>
            <h2>Dostępne Oferty</h2>
            <div className={styles.topLine}></div>
            <div className={styles.offersSection}>oferta 1 oferta 2{/* generate offers from imported JSON */}</div>
            <div className={styles.bottomLine}></div>
        </div>
    );
}
