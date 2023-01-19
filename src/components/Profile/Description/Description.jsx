import styles from "./Description.module.scss";

import defaultBackgroundrImg from "./../../../assets/img/panda.jpg";
import defaultAvatarImg from "../../../assets/img/DialogPersone.png";

import Loader from "../../../common/Loader/Loader";


const Description = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className={styles.description}>
      <div className={styles.main}>
        <div className={styles.backgroungImgWrapper}>
          <img
            className={styles.backgroungImg}
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : defaultBackgroundrImg
            }
            alt="backgroungImage"
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
            <div className={styles.about}>{props.profile.aboutMe}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Description;
