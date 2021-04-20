import React from 'react';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
		</>
	);
};

const CustomChekbox = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
		</>
	);
};

const Basic = () => (
	<section>
		<Formik
			initialValues={{
				name: '',
				email: '',
				plan: 'Basic Pack',
				phoneNumber: '',
				companyName: '',
			}}
			validationSchema={Yup.object({
				name: Yup.string().min(3, 'Must be at least 3 characters long').max(15, 'Must be 15 characters or less').required('Required'),
				email: Yup.string().email('Invalid email address').required('Required'),
				specialPower: Yup.string().oneOf(['Basic Pack Free', 'Pro Pack $9.99', 'Ultimate Pack $19.99']).required('Required'),
			})}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					resetForm();
					setSubmitting(false);
				}, 3000);
			}}
		></Formik>
	</section>
);

export default Basic;
