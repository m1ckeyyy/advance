import styles from "./LandingPage.module.scss";
import NavBar from "@/app/components/NavBar";

export default function LandingPage() {
	return (
		<main className={styles.containerWrap}>
			<NavBar />
		</main>
	);
}
