import { connect } from "react-redux";

import { logout } from "../../redux/auth-reducer";
import Header from "./Header";


const HeaderContainer = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		userPhoto: state.auth.userPhoto,
		isAuth: state.auth.isAuth,
	}
}


export default connect(mapStateToProps, { logout })(HeaderContainer);