import styles from './Input.module.scss'
import { Field } from 'formik';


const SimpleInput = (props) => {	
	return (
		<div>
			<Field {...props} className={`${props.className} ${styles.simpleInput}`} 
			/>
		</div>
	)
}

export default SimpleInput;