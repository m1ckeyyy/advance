// 'use client';

import StoreInitializer from '@/app/storeInitializer';
import styles from './LocationOffers.module.scss';
import useStore from '@/app/store';
import { SetMode } from './components/SetMode';
import { Button } from './components/Button';

export default function LocationOffers() {
    // const randomNum = (Math.random() * 1000).toFixed(0);
    // console.log(randomNum);
    const isDark = useStore.getState().darkMode;
    return (
        <main className={styles.containerWrap}>
            <StoreInitializer darkMode={isDark} />
            <div className={styles.item}>{'AAa'}</div>
            <SetMode />
            <Button />
        </main>
    );
}
