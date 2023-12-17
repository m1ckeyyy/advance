import styles from "./NavBar.module.scss";
import Link from "next/link";
import { IoLanguage } from "react-icons/io5";

function NavBar() {
	return (
		<nav className={styles.NavBar}>
			{/* click-scroll to top */}
			<div className={styles.logo}>The Company Logo</div>
			<ul>
				{/* <li id="logo">
					<Link href="#logo">Logo</Link>
				</li> */}
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
			<div className={styles.languageIcon}>
				<IoLanguage size="30" />
			</div>
		</nav>
	);
}

export default NavBar;
