import { Formik, Form, Field } from 'formik';
import { FC } from 'react';
import { validateNewPost } from '../../../../common/validator';

import styles from "./AddPost.module.scss";


type PropsType = {
	addPost: (value: string) => void
}

const AddPost: FC<PropsType> = (props) => {
  return (
		<Formik
			initialValues={{addPost: ""}}
			onSubmit={(values, { resetForm }) => {
				props.addPost(values.addPost);
				resetForm();
			}}
		>
			{({ errors, touched, isSubmitting }) => (
			<Form className={styles.addPost}>
				<Field 
					validate={validateNewPost}
					name="addPost"
					className={styles.addText} 
					as="textarea"
					placeholder="Your text..."
				/>
				{errors.addPost && touched.addPost && <div className={styles.error}>{errors.addPost}</div>}
				<div className={styles.buttons}>
					<button type='submit' disabled={isSubmitting} className={`${styles.addButton} ${styles.button}`}>Add post</button>
				</div>
			</Form>)}
		</Formik>
  );
};


export default AddPost;
