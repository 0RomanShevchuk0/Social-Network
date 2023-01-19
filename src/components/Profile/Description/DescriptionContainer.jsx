import { connect } from "react-redux";
import axios from "axios";

import { setUserProfile } from "../../../redux/profile-reducer";
import Description from "./Description";


const DescriptionContainer = (props) => {
	if(!props.profile) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
		.then(response => props.setUserProfile(response.data))
	}
  return <Description {...props} />;
};


const mapStateToProps = (state) => {
	return {
		profile : state.profilePage.profile
	}
}


export default connect(mapStateToProps, { setUserProfile })(DescriptionContainer);