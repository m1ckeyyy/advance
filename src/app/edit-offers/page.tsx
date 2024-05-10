'use client';

import AddOfferForm from './components/AddOfferForm';
import DisplayOffers from './components/DisplayOffers';
import protectRouteHOC from '../Utils/protectRouteHOC';
import styles from './EditOffers.module.scss';

import { DM_Sans } from 'next/font/google';
import { useState } from 'react';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

function EditOffers() {
    const [showOfferPanel, setShowOfferPanel] = useState<boolean>(false);

    return (
        <div className={`${styles.containerWrap} ${dmSans.className}`}>
            <h1>Admin Panel</h1>
            <button onClick={() => setShowOfferPanel((prev) => !prev)} className={styles.addOfferBtn}>
                Dodaj oferte {showOfferPanel ? '◀' : '▶'}
            </button>
            {showOfferPanel ? <AddOfferForm /> : ''}
            <DisplayOffers />
        </div>
    );
}
export default protectRouteHOC(EditOffers, 'edit-offers');
