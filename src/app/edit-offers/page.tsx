'use client';

import isAuthHOC from '../Utils/isAuthHOC';
import styles from './EditOffers.module.scss';
function EditOffers() {
    return <div className={styles.containerWrap}>hey</div>;
}
export default isAuthHOC(EditOffers, 'edit-offers');
