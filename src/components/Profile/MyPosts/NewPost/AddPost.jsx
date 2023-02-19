import { Formik, Form, Field } from 'formik';
import { validateNewPost } from '../../../../common/validator';

import styles from "./AddPost.module.scss";


const AddPost = (props) => {
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
					<button className={`${styles.cancelButton} ${styles.button}`}>Cancel</button>
					<button type='submit' disabled={isSubmitting} className={`${styles.addButton} ${styles.button}`}>Add post</button>
				</div>
			</Form>)}
		</Formik>
  );
};


export default AddPost;
