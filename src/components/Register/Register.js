import React, { useState } from "react";
import registerService from "services/register";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Register = () => {
	const [isRegistered, setIsRegistered] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({ defaultValues: { username: "", password: "" } });

	const onSubmit = (data) => {
		setIsSubmitting(true);

		registerService(data)
			.then(() => {
				setIsRegistered(true);
				setIsSubmitting(false);
			})
			.catch(() => {
				setIsSubmitting(false);
				setError("username", {
					type: "manual",
					message:
						"Oh no! This username already exists, try another one",
				});
			});
	};

	return isRegistered ? (
		<span>Congratulations! Now you're registered</span>
	) : (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>
                Username
				<input
					type="text"
					placeholder="Enter a username"
					{...register("username", {
						required: "This input is required",
					})}
				/>

				<ErrorMessage
					errors={errors}
					name="username"
					render={({ message }) => (
						<small className="form-error">{message}</small>
					)}
				/>
			</label>

			<label>
                Password
				<input
					type="password"
					autoComplete="Account password"
					placeholder="Enter a password (min. length: 8)"
					{...register("password", {
						required: "This input is required",
						minLength: {
							value: 8,
							message:
								"Password length must be equal or greater than 8",
						},
					})}
				/>

				<ErrorMessage
					errors={errors}
					name="password"
					render={({ message }) => (
						<small className="form-error">{message}</small>
					)}
				/>
			</label>

			<input
				type="submit"
				value="Register"
				disabled={isSubmitting}
				className="btn"
			/>
		</form>
	);
};

export default Register;
