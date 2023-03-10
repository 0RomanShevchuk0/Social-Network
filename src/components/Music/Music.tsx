import { SongType } from "../../types/types";
import Song from "./Song/Song";

import styles from "./Music.module.scss";

type PropsType = {
	songs: Array<SongType>
}

const Music = (props: PropsType) => {
	return (
		<div className={styles.wrapper}>
			<h1>Music</h1>
			{props.songs.map( (song: SongType) =>
			<Song
				key={song.id}
				name={song.name}
				author={song.author}
				link={song.link}
				image={song.image}
			/>)}
		</div>
	)
};


export default Music;
