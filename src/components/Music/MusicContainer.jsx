import { connect } from "react-redux";

import Music from "./Music";


const mapStateToProps = (state) => {
	return {
		songs : state.musicPage.songs
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)

export default MusicContainer;