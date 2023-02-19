import { compose } from "redux";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { updateUserStatus, getUserStatus, setUserProfile, addPost } from "../../redux/profile-reducer";
import Profile from "./Profile";


const ProfileContainer = (props) => {
	useEffect(() => {
		let userId = props.router.params.userId;
		if(!userId) userId = props.authUserId;
		
		props.setUserProfile(userId);
		props.getUserStatus(userId);
	}, [props.authUserId]);

	return <Profile {...props} />;
};


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		posts: state.profilePage.posts,
		status: state.profilePage.status,
		authUserId: state.auth.id,
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
	
export default compose(
	connect(mapStateToProps, { updateUserStatus, getUserStatus, setUserProfile, addPost }),
	withRouter
)(ProfileContainer);