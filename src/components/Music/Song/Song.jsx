import styles from "./Song.module.scss";


const Song = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className="imgWrapper">
					<img className={styles.image} src={props.image} alt="songImage" />
				</div>
        <div className={styles.description}>
          <h2 className={styles.name}>{props.name}</h2>
          <h6 className={styles.author}>
            {props.author ? props.author : "Author unknown"}
          </h6>
        </div>
      </div>
      <audio src={props.link} controls></audio>
    </div>
  );
};

export default Song;
