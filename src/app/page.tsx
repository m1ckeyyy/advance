// import Image from 'next/image';
import styles from './page.module.css';
// import LandingPage from "./components/LandingPage";
// import LocationOffers from "./components/LocationOffers";
//      t est comment
import { LandingPage, LocationOffers } from './components';
export default function Home() {
    return (
        <>
            <LandingPage />
            <LocationOffers />
        </>
    );
}
