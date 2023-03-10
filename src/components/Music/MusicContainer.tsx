import { connect } from "react-redux"

import Music from "./Music"


const mapStateToProps = (state: any) => {
	return {
		songs : state.musicPage.songs
	}
}

const MusicContainer = connect(mapStateToProps, {})(Music)

export default MusicContainer