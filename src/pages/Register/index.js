import React from "react";
import Register from "components/Register";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
	return (
		<>
			<Helmet>
				<title>Giphy App | Register</title>
				<meta
					name="description"
					content="Registrar cuenta en Giphy App"
				/>
				<link
					rel="canonical"
					href="https://giphy-app-alvaro-jrr.vercel.app/register"
				/>
			</Helmet>

			<section className="RegisterPage">
				<h2>Register</h2>

				<Register />
			</section>
		</>
	);
};

export default RegisterPage;
