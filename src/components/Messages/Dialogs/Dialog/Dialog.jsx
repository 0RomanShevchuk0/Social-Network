import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";
import DialogPersone from "./../../../../assets/img/DialogPersone.png";

const Dialog = (props) => {
  return (
        <div className={styles.dialogItem}>
					<NavLink
						className={(DialogLink) => DialogLink.isActive ? [styles.dialogItemLink, styles.active].join(" ") : styles.dialogItemLink}
						to={props.id}>
							<div>
								<img className={styles.personeImg} src={DialogPersone} alt="DialogPersone" />
							</div>
							<span className={styles.personeName}>{props.name}</span>
					</NavLink>
				</div>
  );
};

export default Dialog;
