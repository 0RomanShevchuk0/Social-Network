import styles from "./Loader.module.scss";

import loader from "../../assets/loader.svg";
import { FC } from "react";


const Loader: FC = () => {
	return (
		<div className={styles.loaderWrapper}>
			<img src={loader} alt="Loader" />
		</div>
	);
};


export default Loader;