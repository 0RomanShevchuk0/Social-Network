import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { setUserProfile, addPost, updateNewPostText } from "../../redux/profile-reducer";
import Profile from "./Profile";


const ProfileContainer = (props) => {

	useEffect(() => {
		let userId = props.router.params.userId;
		if(!userId) userId = 2;

		props.setUserProfile(userId);
	}, [props]);

	return <Profile {...props} />;
};


const mapStateToProps = (state) => {
	return {
		profile : state.profilePage.profile,
		posts : state.profilePage.posts,
		newPostText : state.profilePage.newPostText,
	}
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
			let location = useLocation();
			let navigate = useNavigate();
			let params = useParams();
			return (
					<Component
							{...props}
							router={{ location, navigate, params }}
					/>
			);
	}

	return ComponentWithRouterProp;
}
let withUrlDataProfileContainer = withRouter(ProfileContainer);


export default connect(mapStateToProps, { setUserProfile, addPost, updateNewPostText })(withUrlDataProfileContainer);