import styles from "./Description.module.scss";
import descriprionImg from "./../../../assets/img/panda.jpg";

const Description = () => {
  return (
    <div className="descriprion">
      <div>
        <img className={styles.descriprionImg} src={descriprionImg} alt="descriprionImg" />
      </div>
      <div>ava+description</div>
    </div>
  );
};

export default Description;
