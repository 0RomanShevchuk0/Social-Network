import { useEffect } from "react";
import { connect } from "react-redux";

import { me, logout } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
	useEffect(() => {
		props.me();
	} ,[props.isAuth]);

  return <Header {...props} />
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		userPhoto: state.auth.userPhoto,
		isAuth: state.auth.isAuth,
	}
}


export default connect(mapStateToProps, { me, logout })(HeaderContainer);