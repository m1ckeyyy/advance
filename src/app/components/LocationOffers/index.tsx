// import StoreInitializer from '@/app/storeInitializer';
import styles from './LocationOffers.module.scss';
// import useStore from '@/app/store';
import CardOffer from './components/CardOffer';

export default function LocationOffers() {
    return (
        <main className={styles.containerWrap}>
            <CardOffer imgsrc={'/images/katowice.jpg'} name={'Katowice'} classReference={'katowice'} />
            <CardOffer imgsrc={'/images/krakow-2.jpg'} name={'Kraków'} classReference={'krakow'} />
            <CardOffer imgsrc={'/images/gdansk.jpg'} name={'Gdańsk'} classReference={'gdansk'} />
            <div className={styles.styledLine1}></div>
            <div className={styles.styledLine2}></div>
        </main>
    );
}
