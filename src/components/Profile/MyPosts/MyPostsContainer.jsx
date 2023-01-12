import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
	return {
		posts : state.profilePage.posts,
		newPostText : state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost : () => dispatch(addPostActionCreator()),
		updateNewPostText : (newText) => dispatch(updateNewPostTextActionCreator(newText))
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
