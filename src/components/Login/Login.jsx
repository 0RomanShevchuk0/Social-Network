import { useState } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import { login } from '../../redux/auth-reducer';
import { validateLogin, validatePassword } from '../../common/validator';

import styles from "./Login.module.scss";
import showPassword from "../../assets/img/show.png";
import hidePassword from "../../assets/img/hide.png";
import Input from '../../common/Input/Input';


const Login = (props) => {
	
	const [passwordVisibility, setPasswordVisibility] = useState("password");
	const [passwordIcon, setPasswordIcon] = useState(showPassword);

	function submit(values, submitProps) {
		props.login(values.email, values.password, values.rememberMe, submitProps.setStatus).then(() => {
			submitProps.setSubmitting(false);
		});
		
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
	
	if(props.isAuth) return <Navigate to="/profile"/>

	return(
		<div className={styles.wrapper}>
			<h1>Login</h1>
			<Formik
				initialValues={{ email: "", password: "", rememberMe: false }}
				onSubmit={submit}
			>
				{({ errors, touched, isSubmitting, status }) => (
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
							<button type="submit" disabled={isSubmitting} className={styles.submitButton}>Submit</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}


export default connect(mapStateToProps, { login })(Login);
