import { Field } from 'formik';
import { FC } from 'react';
import Input from '../../common/Input/Input';
import { RequiredField } from '../../common/validator';

import styles from "./Login.module.scss";


type PropsType = {
	captchaImg: string
}

const Captcha: FC<PropsType> = (props) => {
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