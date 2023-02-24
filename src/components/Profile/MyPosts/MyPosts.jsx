import styles from "./MyPosts.module.scss";

import Post from "./Post/Post";
import AddPost from "./NewPost/AddPost";


const MyPosts = (props) => {
	let posts = props.posts.map(post => 
	<Post 
		profile={props.profile} 
		content={post.content} 
		likesCount={post.likesCount} 
		key={post.id} 
	/>);
	
  return (
    <div className={styles.myPosts}>
      <h2 className={styles.title}>My posts</h2>
      <AddPost addPost={props.addPost} />
      <div className="posts">
				{posts}
      </div>
    </div>
  );
};

export default MyPosts;
