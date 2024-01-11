import StoreInitializer from '@/app/storeInitializer';
import styles from './LocationOffers.module.scss';
import useStore from '@/app/store';
import CardOffer from './components/CardOffer';

export default function LocationOffers() {
    return (
        <main className={styles.containerWrap}>
            <div>
                <CardOffer />
            </div>
        </main>
    );
}
