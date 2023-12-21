import styles from "./NavBar.module.scss";
import Link from "next/link";
import { TbBuildingEstate } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";

import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "300" });

function NavBar() {
	return (
		<nav className={`${styles.NavBar} ${dmSans.className}`}>
			{/* click-scroll to top */}
			<div className={styles.logo}>
				{/* <MdOutlineRealEstateAgent size="2.5rem" /> */}
				<Image src="/logo3.png" alt="Small logo" width={62} height={62} />
				<p>
					ADVANCE
					<br />
					NIERUCHOMOŚCI
				</p>
			</div>
			<ul>
				<li>
					<Link href="#oferty">Oferty</Link>
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
			</ul>
		</nav>
	);
}

export default NavBar;
