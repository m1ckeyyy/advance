import NavBar from './components/NavBar';
import { Contact, Footer } from '@/app/_components';
import OffersSection from './components/OffersSection';
import styles from './offersPage.module.scss';

export default function Offers() {
    return (
        <div className={styles.containerWrap}>
            <NavBar />
            <OffersSection />
            <Contact background="transparent" />
            <Footer />
        </div>
    );
}
