import styles from "./MyPosts.module.scss";

import Post from "./Post/Post";
import AddPost from "./NewPost/AddPost";
import Loader from "../../../common/Loader/Loader";


const MyPosts = (props) => {
	let postsElements = props.posts.map(post =>  <Post profile={props.profile} content={post.content} likesCount={post.likesCount} key={post.id} />);

	if (!props.profile) {
    return <Loader />;
  }

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
