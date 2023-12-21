import styles from "./LandingPage.module.scss";
import NavBar from "@/app/components/NavBar";
import { IoLanguage } from "react-icons/io5";
import { Mochiy_Pop_One } from "next/font/google";
import Image from "next/image";

const mochiyPopOne = Mochiy_Pop_One({ subsets: ["latin"], weight: "400" });

export default function LandingPage() {
	return (
		<main className={styles.containerWrap}>
			<NavBar />
			<div className={styles.heroContent}>
				<div className={styles.leftContent}>
					<h1 className={`${mochiyPopOne.className}`}>
						<div>
							<span>NAJEM</span>
						</div>
						<div>
							<span>WYNAJEM</span>
						</div>
						<div>
							<span>SPRZEDAZ</span>
						</div>
						<div>
							<span>ZAKUP</span>
						</div>
					</h1>
				</div>
				<div className={styles.rightContent}>
					<Image src="/sample-man.png" width={554} height={451} alt="man" />
				</div>

				<div className={styles.languageIcon} title="Change language">
					<IoLanguage size="30" />
				</div>
			</div>
		</main>
	);
}
