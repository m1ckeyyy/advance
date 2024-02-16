// import Image from 'next/image';
import styles from './page.module.css';
// import LandingPage from "./components/LandingPage";
// import LocationOffers from "./components/LocationOffers";
//      t est comment
import { LandingPage, LocationOffers, Testimonials, AboutUs, Footer } from './components';
export default function Home() {
    return (
        <div>
            <LandingPage />
            <LocationOffers />
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    );
}
