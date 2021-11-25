import React from "react";
import Login from "components/Login";
import { Helmet } from "react-helmet";

const LoginPage = () => {
	return (
		<>
			<Helmet>
				<title>Giphy App | Login</title>
				<meta
					name="description"
					content="Iniciar sesión en Giphy App"
				/>
				<link
					rel="canonical"
					href="https://giphy-app-alvaro-jrr.vercel.app/login"
				/>
			</Helmet>

			<section className="LoginPage">
				<h2>Login</h2>

				<Login />
			</section>
		</>
	);
};

export default LoginPage;
