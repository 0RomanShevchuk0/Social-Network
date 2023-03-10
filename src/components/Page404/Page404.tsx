import styles from './Page404.module.scss'
import page404 from '../../assets/img/page404.png'
import { FC } from 'react';

const Page404: FC = () => {
	return (
		<div className={styles.container}>
			<img src={page404} alt="404" />
			<h2 className={styles.title}>Page not found</h2>
		</div>
	)
}

export default Page404;