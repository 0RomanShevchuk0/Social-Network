import { compose } from "redux"
import { connect } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { FC, useEffect, useState } from "react"

import { updateUserStatus, getUserStatus, setUserProfile, 
	addPost, deletePost, updateUserPhoto } from "../../redux/profile-reducer"
import Profile from "./Profile"
import { GlobalStateType } from "../../redux/redux-store"
import { PostType, ProfileType } from "../../types/types"


type MapStatePropsType = {
	profile: ProfileType
	posts: Array<PostType>
	authUserId: number | null
	status: string
}
type MapDispatchPropsType = {
	getUserStatus: (userId: number) => void
	setUserProfile: (userId: number) => void
	updateUserPhoto: (image: string) => void
	updateUserStatus: (status: string) => void
	addPost: (newPostText: string) => void
	deletePost: (postId: number) => void
}
type OwnPropsType = {
	router: any
	store: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const ProfileContainer: FC<PropsType> = (props) => {
	let [isProfileYours, setIsProfileYours] = useState(false)

	let navigate = useNavigate()

	useEffect(() => {
		let userId = props.router.params.userId
		setIsProfileYours(false)

		if(!userId) {
			userId = props.authUserId
			setIsProfileYours(true)
		}

		if(!props.router.params.userId && !props.authUserId) {
			return navigate("/login")
		}

		props.setUserProfile(userId)
		props.getUserStatus(userId)
	}, [props.authUserId, props.router.params.userId])
	
	
	return <Profile {...props} isProfileYours={isProfileYours} />
}


const mapStateToProps = (state: GlobalStateType): MapStatePropsType => {
	return {
		profile: state.profilePage.profile,
		posts: state.profilePage.posts,
		authUserId: state.auth.id,
		status: state.profilePage.status,
	}
}

function withRouter(Component: FC) {
	function ComponentWithRouterProp(props: any) {
			let location = useLocation()
			let navigate = useNavigate()
			let params = useParams()
			return (
					<Component
							{...props}
							router={{ location, navigate, params }}
					/>
			)
	}

	return ComponentWithRouterProp
}
	
export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, GlobalStateType>(
		mapStateToProps, { updateUserStatus, getUserStatus, setUserProfile, 
		addPost, deletePost, updateUserPhoto 
	}),
	withRouter
)(ProfileContainer)