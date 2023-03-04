import styles from "./Music.module.scss";
import Song from "./Song/Song";

const Music = (props) => {
	return (
		<div className={styles.wrapper}>
			<h1>Music</h1>
			{props.songs.map( (song) =>
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
