import styles from "./MyPosts.module.scss";

import Post from "./Post/Post";
import AddPost from "./NewPost/AddPost";


const MyPosts = (props) => {
	let postsElements = props.posts.map(post =>  <Post content={post.content} likesCount={post.likesCount} key={post.id} />);


  return (
    <div className={styles.myPosts}>
      <h2 className={styles.title}>My posts</h2>
      <AddPost 
				addPost={props.addPost} 
				updateNewPostText={props.updateNewPostText} 
				newPostText={props.newPostText} 
			/>
      <div className="posts">
				{postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
