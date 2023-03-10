import { NavLink } from 'react-router-dom'
import { FC } from 'react'
import styles from "./Navbar.module.scss";


type PropsType = {
	to: string
	name: string
}

const SideBarLink: FC<PropsType> = (props) => {
	return (
		<li>
			<NavLink 
				className = {navData => navData.isActive ? `${styles.item} ${styles.active}` : styles.item} 
				to={`/${props.to}`}>
					{props.name}
			</NavLink>
		</li>
	)
}

export default SideBarLink