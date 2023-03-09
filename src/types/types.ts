export type PostType = {
	id: number,
	content: string,
	likesCount: number,
}
export type PhotosType = {
	small: string | null
	large: string | null
}
export type ContactsType = {
	facebook: string | null,
		github: string | null,
		website: string | null,
		youtube: string | null,
		vk: string | null,
		twitter: string | null,
		instagram: string | null,
		mainLink: string | null,
}
export type ProfileType = {
	aboutMe: string | null,
	contacts: ContactsType,
	fullName: string | null,
	lookingForAJob: boolean,
	lookingForAJobDescription: string  | null,
	photos: PhotosType,
	userId: number | null,
}


export type UserType = {
	followed: boolean
	id: number
	name: string
	photos: PhotosType
	status: string
	uniqueUrlName: string | null

}


export type SongType = {
	id: number
	image: string
	name: string
	author: string
	link: string
}