import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


export function withAuthReducer(Component) {
	function RedirectComponent(props) {
		if(!props.isAuth) return <Navigate to="/login"/>

		return <Component {...props} />
	}

	function mapStateToProps(state) {
		return{
			isAuth: state.auth.isAuth,
		}
	}

	return connect(mapStateToProps)(RedirectComponent);
}