import { Formik, Form, Field } from 'formik';
import SimpleInput from '../../../../common/Input/SimpleInput';
import { updateProfile } from '../../../../redux/profile-reducer';

import styles from "../ProfileInfo.module.scss";
import closeIcon from "../../../../assets/img/close-icon.png";

const ProfileEditForm = ({profile, ...props}) => {

	const initialValues = {
		userId: profile.userId,
		AboutMe: profile.AboutMe || 'w',
		lookingForAJob: (profile.lookingForAJob),
		lookingForAJobDescription: profile.lookingForAJobDescription || 'q',
		fullName: profile.fullName,
		contacts: {
			vk: profile.contacts.vk,
			mainLink: profile.contacts.mainLink,
			github: profile.contacts.github,
			website: profile.contacts.website,
			youtube: profile.contacts.youtube,
			instagram: profile.contacts.instagram,
			facebook: profile.contacts.facebook,
			twitter: profile.contacts.twitter,
		}
	}

	async function handleSubmit({fullName, ...values}, submitProps) {
		debugger
		let result = {
			...initialValues,
			fullName: fullName,
			contacts: {
				...values
			}
		}
		const response = await props.store.dispatch(updateProfile(result, submitProps.setStatus));
		if(response.resultCode === 0){
			props.setIsProfileEditMode(false);
		}
	};

	return (
		<div className={styles.profileEditFormContainer}>
			<button 
				onClick={() => props.setIsProfileEditMode(false)}
				className={styles.closeButton}
			>
				<img src={closeIcon} alt="Close" />
				</button>
			<h1>Edit profile</h1>
			<Formik
				initialValues={{
					fullName: initialValues.fullName,
					vk: initialValues.contacts.vk || '',
					mainLink: initialValues.contacts.mainLink || '',
					github: initialValues.contacts.github || '',
					website: initialValues.contacts.website || '',
					youtube: initialValues.contacts.youtube || '',
					instagram: initialValues.contacts.instagram || '',
					facebook: initialValues.contacts.facebook || '',
					twitter: initialValues.contacts.twitter || '',
				}}
				onSubmit={handleSubmit}
			>
				{({ status }) => (
					<Form className={styles.profileEditForm}>
						<div>
							<label>
								Name:
								<Field 
									name="fullName"
									as={SimpleInput}
									placeholder="Enter your name"
									className={styles.field}
									/>
							</label>
							<label>
								Telegram:
								<Field
									name="vk"
									as={SimpleInput}
									placeholder="Enter your telegram"
									className={styles.field}
									/>
							</label>
							<label>
								LinkedIn:
								<Field
									name="mainLink"
									as={SimpleInput}
									placeholder="Enter your linkedIn"
									className={styles.field}
									/>
							</label>
							<label>
								GitHub:
								<Field
									name="github"
									as={SimpleInput}
									placeholder="Enter your gitHub"
									className={styles.field}
									/>
							</label>
							<label>
								WebSite:
								<Field
									name="website"
									as={SimpleInput}
									placeholder="Enter your webSite"
									className={styles.field}
									/>
							</label>
							<label>
								YouTube:
								<Field
									name="youtube"
									as={SimpleInput}
									placeholder="Enter your youTube"
									className={styles.field}
									/>
							</label>
							<label>
								Instagram:
								<Field
									name="instagram"
									as={SimpleInput}
									placeholder="Enter your instagram"
									className={styles.field}
									/>
							</label>
							<label>
								Facebook:
								<Field
									name="facebook"
									as={SimpleInput}
									placeholder="Enter your facebook"
									className={styles.field}
									/>
							</label>
							<label>
								Twitter:
								<Field
									name="twitter"
									as={SimpleInput}
									placeholder="Enter your twitter"
									className={styles.field}
									/>
							</label>
						</div>
						<div style={{color: "red"}}>{status ? status.error : null}</div>
						<button 
							type='submit' 
							className={styles.submitButton}
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}


export default ProfileEditForm