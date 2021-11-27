import React, { useEffect } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
	const [, setLocation] = useLocation("");
	const { isLogged, isLoading, isError, login } = useUser();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: "",
			password: "",
		},
	});

	// Si isLogged lo redirige al Home
	useEffect(
		() => (isLogged ? setLocation("/") : null),
		[isLogged, setLocation]
	);

	// Loggear al usuario
	const onSubmit = (values) => login(values);

	return (
		<>
			{!isLoading && (
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<label>
						Username
						<input
							type="text"
							placeholder="Enter your username (e.g: johndoe)"
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
							placeholder="Enter your password"
							{...register("password", {
								required: "This input is required",
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

					<button className="btn">Login</button>
				</form>
			)}

			{isLoading && <span>Verifying...</span>}

			{isError && <span>Credentials Error</span>}
		</>
	);
};

export default Login;
