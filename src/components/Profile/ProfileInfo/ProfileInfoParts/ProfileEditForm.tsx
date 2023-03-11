import { Formik, Form, Field } from 'formik';
import SimpleInput from '../../../../common/Input/SimpleInput';
import { updateProfile } from '../../../../redux/profile-reducer';

import styles from "../ProfileInfo.module.scss";
import closeIcon from "../../../../assets/img/close-icon.png";
import { ContactsType, ProfileType } from '../../../../types/types';
import { FC } from 'react';


type PropsType = {
	profile: ProfileType

	store: any

	setIsProfileEditMode: (value: boolean) => void
}

const ProfileEditForm: FC<PropsType> = ({profile, ...props}) => {



	const initialValues = {
		userId: profile.userId,
		aboutMe: profile.aboutMe || '0',
		lookingForAJob: (profile.lookingForAJob),
		lookingForAJobDescription: profile.lookingForAJobDescription || '0',
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

	async function handleSubmit({fullName, ...values}: any, submitProps: any) {
		let result: any = {
			...initialValues,
			fullName: fullName,
			contacts: {
				...values as ContactsType
			}
		}
		const response = await props.store.dispatch(updateProfile(result, submitProps.setStatus));
		if(response === 0){
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
							<FormField fieldName="fullName" title="Name" />
							<FormField fieldName="vk" title="Telegram" />
							<FormField fieldName="mainLink" title="LinkedIn" />
							<FormField fieldName="github" title="GitHub" />
							<FormField fieldName="website" title="WebSite" />
							<FormField fieldName="youtube" title="YouTube" />
							<FormField fieldName="instagram" title="Instagram" />
							<FormField fieldName="facebook" title="Facebook" />
							<FormField fieldName="twitter" title="Twitter" />
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


type FormFieldPropsType = {
	title: string
	fieldName: string
}
const FormField: FC<FormFieldPropsType> = (props) => {
	return (
		<label>
			{props.title}:
			<Field 
				name={props.fieldName}
				as={SimpleInput}
				placeholder={`Enter your ${props.title}`}
				className={styles.field}
				/>
		</label>
	)
}

export default ProfileEditForm