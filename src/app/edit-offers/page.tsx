'use client';

import isAuth from '../Utils/isAuth';
import styles from './EditOffers.module.scss';
// auth middleware
function EditOffers() {
    return <div className={styles.containerWrap}>hey</div>;
}
export default isAuth(EditOffers);
