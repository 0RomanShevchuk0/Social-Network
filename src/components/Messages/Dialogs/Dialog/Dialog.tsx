import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.scss";
import DialogPerson from "./../../../../assets/img/DialogPersone.png";
import { FC } from "react";


type PropsType = {
	key: number
	id: string
	name: string
}

const Dialog: FC<PropsType> = (props) => {
  return (
        <div className={styles.dialogItem}>
					<NavLink
						className={(DialogLink) => DialogLink.isActive ? 
							`${styles.dialogItemLink} ${styles.active}` : 
							styles.dialogItemLink}
						to={props.id}
					>
						<div>
							<img className={styles.personImg} src={DialogPerson} alt="DialogPerson" />
						</div>
						<span className={styles.personName}>{props.name}</span>
					</NavLink>
				</div>
  );
};

export default Dialog;
