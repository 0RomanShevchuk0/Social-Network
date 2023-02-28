import { useState } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import { getCaptcha, login } from '../../redux/auth-reducer';
import { validateLogin, validatePassword } from '../../common/validator';

import styles from "./Login.module.scss";
import showPassword from "../../assets/img/show.png";
import hidePassword from "../../assets/img/hide.png";
import Input from '../../common/Input/Input';


const Login = (props) => {
	
	const [passwordVisibility, setPasswordVisibility] = useState("password");
	const [passwordIcon, setPasswordIcon] = useState(showPassword);

	async function handleSubmit(values, submitProps) {
		const response = await props.login(values.email, values.password, values.rememberMe, values.captcha, submitProps.setStatus)
		if(response === "captcha") {
			await props.getCaptcha();
			submitProps.setFieldValue("captcha", "");
		}
		submitProps.setSubmitting(false);
	}
	
	function passwordVisible() {
		if(passwordVisibility === "password") {
			setPasswordVisibility("text");
			setPasswordIcon(hidePassword);
		}
		else {
			setPasswordVisibility("password");
			setPasswordIcon(showPassword);
		}
	}
	
	if(props.isAuth) return <Navigate to="/profile"/>;

	return(
		<div className={styles.wrapper}>
			<h1>Login</h1>
			<Formik
				initialValues={{ email: "", password: "", rememberMe: false, captcha: "" }}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting, status }) => (
					<Form className={styles.loginForm}>
						<div className={styles.inputContainer}>
							<Field
								name="email"
								as={Input}
								validate={validateLogin}
								type="email"
								placeholder="Login"
								className={styles.emailInput}
							/>
						</div>

						<div className={styles.inputContainer}>
							<Field
								name="password"
								as={Input}
								validate={validatePassword}
								type={passwordVisibility}
								placeholder="Password"
								className={styles.passwordInput}
							/>
							<div className={styles.showPassword} onClick={passwordVisible}>
								<img src={passwordIcon} alt="showPassword" />
							</div>
						</div>
						<div className={styles.submitBlock}>
							<label className={styles.checkboxInput}>
								<Field type="checkbox" name="rememberMe" />
								Remember me
							</label>
							<div className={styles.error}>{status ? status.error : null}</div>
							{props.captchaImg && <Captcha captchaImg={props.captchaImg} /> }
							<button type="submit" disabled={isSubmitting} className={styles.submitButton}>Submit</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

function Captcha(props) {
	return (
		<div className="">
			<img src={props.captchaImg} alt="captcha" />
			<Field
				name="captcha"
				as={Input}
				placeholder="Captcha"
				className={styles.passwordInput}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captchaImg: state.auth.captchaImg
	}
}


export default connect(mapStateToProps, { login, getCaptcha })(Login);
