import React, { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [, setLocation] = useLocation("");
	const { isLogged, isLoading, isError, login } = useUser();

	// Si isLogged lo redirige al Home
	useEffect(
		() => (isLogged ? setLocation("/") : null),
		[isLogged, setLocation]
	);

	// Obtener username
	const handleChangeUser = (evt) => setUsername(evt.target.value);

	// Obtener password
	const handleChangePassword = (evt) => setPassword(evt.target.value);

	// Loggear al usuario
	const handleSubmit = (evt) => {
		evt.preventDefault();
		login({ username, password });
	};

	return (
		<>
			{!isLoading && (
				<form className="form" onSubmit={handleSubmit}>
					<label>
						Username
						<input
							type="text"
							placeholder="Enter your username (e.g: johndoe)"
							onChange={handleChangeUser}
							value={username}
						/>
					</label>

					<label>
						Password
						<input
							type="password"
							placeholder="Enter your password"
							onChange={handleChangePassword}
							value={password}
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
