import styles from "./Description.module.scss";

import defaultBackgroundImg from "./../../../assets/img/panda.jpg";
import defaultAvatarImg from "../../../assets/img/DialogPersone.png";

import ProfileStatus from "./ProfileStatus";


const Description = (props) => {
  return (
    <div className={styles.description}>
      <div className={styles.main}>
        <div className={styles.backgroundImgWrapper}>
          <img
            className={styles.backgroundImg}
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : defaultBackgroundImg
            }
            alt="backgroundImage"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.avatarImgWrapper}>
            <img
              className={styles.avatarImg}
              src={
                props.profile.photos.small
                  ? props.profile.photos.small
                  : defaultAvatarImg
              }
              alt="AvatarImage"
            />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.fullName}>{props.profile.fullName}</div>
            <div className={styles.about}>
							<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Description;
