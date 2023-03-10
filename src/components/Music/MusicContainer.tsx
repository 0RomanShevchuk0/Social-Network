import { connect } from "react-redux"
import { GlobalStateType } from "../../redux/redux-store"
import { SongType } from "../../types/types"
import Music from "./Music"

type MapStateProps = {
	songs: Array<SongType>
}

const mapStateToProps = (state: GlobalStateType): MapStateProps => {
	return {
		songs : state.musicPage.songs
	}
}

const MusicContainer = connect(mapStateToProps, {})(Music)

export default MusicContainer