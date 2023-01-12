import styles from "./Dialogs.module.scss";

import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
	
	let dialogItems = props.dialogs.map((item) => <Dialog key={item.id} name={item.name} id={item.name + item.id} />);

  return (
    <div className={styles.dialogs}>
      {dialogItems}
    </div>
  );
};

export default Dialogs;
