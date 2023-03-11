import { FC, useState } from 'react';

import styles from "../ProfileInfo.module.scss";


type PropsType = {
	classes: string

	updateUserPhoto: (image: string) => void
	setIsUploadPhotoVisible: (value: boolean) => void
	setUploadPhotoClasses: (styles: Array<string>) => void
}

const UploadImage: FC<PropsType> = (props) => {
	const [image, setImage] = useState('');
	const [preview, setPreview] = useState('');

	function submit(e: any) {
		e.preventDefault();
		props.updateUserPhoto(image);
		props.setIsUploadPhotoVisible(false);
		props.setUploadPhotoClasses([styles.uploadPhoto, styles.hidden]);
	}

	function handleFileUpload(e: any) {
		let reader = new FileReader();
		let file = e.target.files[0];
		setImage(file);
		reader.readAsDataURL(file);
		reader.onloadend = () => setPreview((reader as any).result);
	}
	
	return (
		<div className={props.classes} id='uploadPhoto'>
			<h2>Choose your image</h2>
			<form onSubmit={submit} className={styles.form}>
				<input type="file" onChange={handleFileUpload} />
				<img className={styles.preview} src={preview} alt="" />
				<button className={styles.submitButton} type='submit'>Submit</button>
			</form>
		</div>
	)
}


export default UploadImage;