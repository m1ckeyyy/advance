'use client';

// import { useState } from 'react';
import styles from './DisplayOffers.module.scss';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

export default function DisplayOffers() {
    // const [offer, setOffer] = useState<>({});
    //send get request to /retrieve-offers (no auth middleware needed)

    //conditional rendering AdminContext vs UserContext

    return (
        <>
            <h2 className={styles.obecneOferty}>Obecne oferty:</h2>
            {/* import offers */}
        </>
    );
}
