import React from "react";
import ErrorIllustration from "./dog-eating-a-page.png";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "wouter";

const ErrorPage = () => {
	const [location] = useLocation();

	return (
		<section className="ErrorPage">
			<Helmet>
				<title>Giphy App | Error 404</title>
				<link
					rel="canonical"
					href={`https://giphy-app-alvaro-jrr.vercel.app${location}`}
				/>
			</Helmet>

			<img
				className="ErrorPage-img"
				src={ErrorIllustration}
				alt="A dog eating a page"
			/>

			<div className="ErrorPage-information">
				<h2 className="ErrorPage-title">
					¡Oh no! un perro se ha comido la p&aacute;gina
				</h2>

				<p className="ErrorPage-redirect">
					Volver a la p&aacute;gina de <Link to="/">Inicio</Link>
				</p>
			</div>
		</section>
	);
};

export default ErrorPage;
