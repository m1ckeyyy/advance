import StoreInitializer from '@/app/storeInitializer';
import styles from './LocationOffers.module.scss';
import useStore from '@/app/store';
import CardOffer from './components/CardOffer';

export default function LocationOffers() {
    return (
        <main className={styles.containerWrap}>
            <CardOffer imgsrc={'/krakow-2.jpg'} name={'Kraków'} classReference={'krakow'} />
            <CardOffer imgsrc={'/katowice.jpg'} name={'Katowice'} classReference={'katowice'} />
            <CardOffer imgsrc={'/gdansk.jpg'} name={'Gdańsk'} classReference={'gdansk'} />
        </main>
    );
}
