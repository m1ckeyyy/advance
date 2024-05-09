'use client';

import AddOfferForm from './components/AddOfferForm';
import protectRouteHOC from '../Utils/protectRouteHOC';
import styles from './EditOffers.module.scss';

function EditOffers() {
    return (
        <div className={styles.containerWrap}>
            <h1>Admin Panel</h1>
            <div>Dodaj oferte: </div>
            <AddOfferForm />
            <br />
            <div>Obecne oferty:</div>
        </div>
    );
}
export default protectRouteHOC(EditOffers, 'edit-offers');
