import styles from "./AddPost.module.scss";


const AddPost = (props) => {

	const onAddPost = () => {
		props.addPost();
	}

	const onPostTextChange = (e) => {
		let newText = e.target.value;
		props.updateNewPostText(newText);
	}
	
  return (
    <div className={styles.addPost}>
      <textarea 
				placeholder="Your text..." 
				className={styles.addText} 
				onChange={onPostTextChange} 
				value={props.newPostText} 
			/>

      <div className={styles.buttons}>
        <button className={`${styles.cancelButton} ${styles.button}`}>Cansel</button>
        <button onClick={onAddPost} className={`${styles.addButton} ${styles.button}`}>Add post</button>
      </div>
    </div>
  );
};

export default AddPost;
