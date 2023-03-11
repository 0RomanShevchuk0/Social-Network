import styles from "./MyPosts.module.scss";

import Post from "./Post/Post";
import AddPost from "./NewPost/AddPost";
import { FC } from "react";
import { PostType, ProfileType } from "../../../types/types";


type PropsType = {
	profile: ProfileType
	posts: Array<PostType>

	addPost: (newPostText: string) => void
	deletePost: (postId: number) => void
}

const MyPosts: FC<PropsType> = (props) => {
	let posts = props.posts.map(post => 
	<Post 
		profile={props.profile} 
		content={post.content} 
		likesCount={post.likesCount} 
		key={post.id} 
		id={post.id} 
		deletePost={props.deletePost}
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
