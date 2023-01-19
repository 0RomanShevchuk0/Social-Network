import { connect } from "react-redux";
import axios from "axios";

import { setUserProfile, addPost, updateNewPostText } from "../../redux/profile-reducer";
import Profile from "./Profile";


const ProfileContainer = (props) => {
	if(!props.profile) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
		.then(response => props.setUserProfile(response.data))
	}
  return <Profile {...props} />;
};


const mapStateToProps = (state) => {
	return {
		profile : state.profilePage.profile,
		posts : state.profilePage.posts,
		newPostText : state.profilePage.newPostText,
	}
}


export default connect(mapStateToProps, { setUserProfile, addPost, updateNewPostText })(ProfileContainer);