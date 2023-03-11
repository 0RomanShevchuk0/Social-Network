import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import Captcha from './Captcha';
import { getCaptcha, login } from '../../redux/auth-reducer';
import { RequiredField } from '../../common/validator';

import styles from "./Login.module.scss";
import showPassword from "../../assets/img/show.png";
import hidePassword from "../../assets/img/hide.png";
import Input from '../../common/Input/Input';
import { GlobalStateType } from '../../redux/redux-store';



type MapStatePropsType = {
	isAuth: boolean
	captchaImg: string | null
}
type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: any) => any
	getCaptcha: () => any
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const Login: FC<PropsType> = (props) => {
	
	const [passwordVisibility, setPasswordVisibility] = useState("password");
	const [passwordIcon, setPasswordIcon] = useState(showPassword);

	async function handleSubmit(values: any, submitProps: any) {
		const response = await props.login(values.email, values.password, true, values.captcha, submitProps.setStatus)
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
			<h1>Social Network</h1>
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
								validate={RequiredField}
								type="email"
								placeholder="Login"
								className={styles.emailInput}
							/>
						</div>

						<div className={styles.inputContainer}>
							<Field
								name="password"
								as={Input}
								validate={RequiredField}
								type={passwordVisibility}
								placeholder="Password"
								className={styles.passwordInput}
							/>
							<div className={styles.showPassword} onClick={passwordVisible}>
								<img src={passwordIcon} alt="showPassword" />
							</div>
						</div>
						<div className={styles.submitBlock}>
							<div className={styles.error}>{status ? status.error : null}</div>
							{props.captchaImg && <Captcha captchaImg={props.captchaImg} /> }
							<button type="submit" disabled={isSubmitting} className={styles.submitButton}>Log in</button>
						</div>
					</Form>
				)}
			</Formik>
			<div className={styles.tip}>
				<h4 
					onClick={(e: any) => {(e.target).nextElementSibling.classList.contains(styles.hidden) ?
						e.target.nextElementSibling.classList.remove(styles.hidden) :
						e.target.nextElementSibling.classList.add(styles.hidden)
					}}
				>
					Don't have an account?
				</h4>
				<div className={`${styles.tipBody} ${styles.hidden}`}>
					<div><span style={{fontWeight: "bold"}}>Login:</span> 0romanshevchuk0@gmail.com</div>
					<div><span style={{fontWeight: "bold"}}>Password:</span> test</div>
				</div>
			</div>
		</div>
	);
}


const mapStateToProps = (state: GlobalStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth,
		captchaImg: state.auth.captchaImg
	}
}


export default connect(mapStateToProps, { login, getCaptcha })(Login);
