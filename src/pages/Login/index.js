import Button from "components/Button";
import React, { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./styles.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [, setLocation] = useLocation("");
	const { isLogged, login } = useUser();

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
		login();
	};

	return (
		<form className="Login" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Username"
				onChange={handleChangeUser}
				value={username}
			/>

			<input
				type="password"
				placeholder="Password"
				onChange={handleChangePassword}
				value={password}
			/>

			<Button handleClick={handleSubmit} text="Login" />
		</form>
	);
};

export default Login;
