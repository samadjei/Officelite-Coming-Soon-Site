import React from 'react';
import Image from 'next/image';
import { Formik, useField, Form } from 'formik';
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

const CustomSelect = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select className="select-input" {...field} {...props} />
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
		>
			{(props) => (
				<Form className="form-flex form-p">
					<CustomTextInput name="name" type="text" placeholder="Name" />
					<CustomTextInput name="email" type="email" placeholder="Email Address" />
					<div className="selector">
						<CustomSelect name="Plan">
							<option className="form--plan" value="Basic Pack">
								Basic Pack <span className="form--type">Free</span>
							</option>
							<option className="form--plan" value="Pro Pack">
								Pro Pack <span className="form--type">$9.99</span>
							</option>
							<option className="form--plan" value="Ultimate Pack">
								Ultimate Pack <span className="form--type">$19.99</span>
							</option>
						</CustomSelect>
						<span className="custom--arrow"></span>
					</div>
					<CustomTextInput name="Phone Number" type="text" placeholder="Phone Number" />
					<CustomTextInput name="Number" type="text" placeholder="Company" />
					{/* <button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button> */}
				</Form>
			)}
		</Formik>
	</section>
);

export default Basic;
