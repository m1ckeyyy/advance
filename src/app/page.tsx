//import styles from './page.module.css';

import { LandingPage, LocationOffers, Testimonials, AboutUs, Footer, Contact } from './components';
export default function Home() {
    return (
        <div>
            <LandingPage />
            <LocationOffers />
            <AboutUs />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}
