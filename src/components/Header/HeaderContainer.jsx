import { useEffect } from "react";
import { connect } from "react-redux";

import { auth } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
	useEffect(() => {
		props.auth();
	} ,[]);

  return <Header {...props} />
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		userPhoto: state.auth.userPhoto
	}
}


export default connect(mapStateToProps, { auth })(HeaderContainer);