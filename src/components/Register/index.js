import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import register from "services/register";

const Register = () => {
	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			validate={(values) => {
				const errors = {};

				if (!values.username) {
					errors.username = "Username is Required";
				} else if (values.username.length < 5) {
					errors.username =
						"Username length has to be greater than 5";
				}

				if (!values.password) {
					errors.password = "Password is Required";
				} else if (values.password.length < 8) {
					errors.password =
						"Password length has to be greater than 8";
				}

				return errors;
			}}
			onSubmit={(values, { setFieldError }) => {
				console.log(values);

				return register(values).catch(() => {
					setFieldError("username", "username invalid");
				});
			}}
		>
			{({ isSubmitting }) => (
				<Form className="form">
					<label>
						Username
						<Field
							placeholder="Enter a username"
							name="username"
							type="text"
						/>
						<ErrorMessage name="username" component="p" />
					</label>

					<label>
						Password
						<Field
							placeholder="Enter a password"
							name="password"
							type="password"
						/>
						<ErrorMessage
							className="form-error"
							name="password"
							component="p"
						/>
					</label>

					<button
						className="btn"
						type="submit"
						disabled={isSubmitting}
					>
						Register
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default Register;
