import { FC } from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/auth-reducer";
import { GlobalStateType } from "../../redux/redux-store";
import Header from "./Header";

type MapStateType = {
	login: string | null
	isAuth: boolean
	authProfilePhoto: string | null
}
type PropsType = {
	login: string | null
	isAuth: boolean
	authProfilePhoto: string | null
	logout: () => void
}


const HeaderContainer: FC<PropsType> = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state: GlobalStateType): MapStateType => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
		authProfilePhoto: state.auth.authProfilePhoto,
	}
}


export default connect(mapStateToProps, { logout })(HeaderContainer);