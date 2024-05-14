'use client';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';

import { TbBuildingEstate } from 'react-icons/tb';
import { MdOutlineRealEstateAgent } from 'react-icons/md';

import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const dmSans = DM_Sans({ subsets: ['latin'], weight: '300' });

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={`${styles.NavBar} ${dmSans.className}`}>
            {/* click-scroll to top */}
            <div className={styles.logo}>
                <Image src="/images/logo3.png" alt="Small logo" width={62} height={62} />
                <p>
                    ADVANCE
                    <br />
                    NIERUCHOMOŚCI
                </p>
            </div>
            <ul className={`${isMenuOpen ? styles.menuOpen : ''}`} onClick={toggleMenu}>
                <li>
                    <Link href="#offers">Oferty</Link>
                </li>
                <li>
                    <Link href="#o-nas">O nas</Link>
                </li>
                <li>
                    <Link href="#opinie">Opinie</Link>
                </li>
                <li>
                    <Link href="#kontakt">Kontakt</Link>
                </li>
                <button className={styles.dropDownMenuBtn} onClick={toggleMenu}>
                    {isMenuOpen ? <IoCloseSharp size="3rem" color="white" /> : <IoMenu size="3rem" color="white" />}
                    {/* {isMenuOpen + ''} */}
                </button>
            </ul>
        </nav>
    );
}

export default NavBar;
