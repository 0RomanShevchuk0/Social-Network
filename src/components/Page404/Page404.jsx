import styles from './Page404.module.scss'
import page404 from '../../assets/img/page404.png'

const Page404 = () => {
	return (
		<div className={styles.container}>
			<img src={page404} alt="404" />
			<h2 className={styles.title}>Page not found</h2>
		</div>
	)
}

export default Page404;