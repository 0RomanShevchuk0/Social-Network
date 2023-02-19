import { Field, useField } from "formik"

import styles from './Input.module.scss'


const Input = (props) => {
	const [field ,meta, helpers] = useField(props);
	
	return (
		<div>
			<Field {...props} className={meta.error && meta.touched ? 
				[props.className, styles.inputError].join(' ') : props.className} 
			/>
			{meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
		</div>
	)
}

export default Input;