import { Field } from 'formik';
import Input from '../../common/Input/Input';
import { RequiredField } from '../../common/validator';

import styles from "./Login.module.scss";


function Captcha(props) {
	return (
		<div className={styles.captchaContainer}>
			<img src={props.captchaImg} alt="captcha" className={styles.captchaImg} />
			<Field
				name="captcha"
				validate={RequiredField}
				as={Input}
				placeholder="Captcha"
				className={`${styles.passwordInput} ${styles.captchaInput}`}
			/>
		</div>
	)
}


export default Captcha;