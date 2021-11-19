import React from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches/index";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

const Home = () => {
	const { gifs } = useGifs();

	return (
		<>
			<Helmet>
				<title>Giphy App | Inicio</title>
				<link
					rel="canonical"
					href="https://giphy-app-alvaro-jrr.vercel.app/"
				/>
				<meta
					name="description"
					content="Buscador 🔍 y Visualizador 👀 de GIFs construido 
						con React ⚛ y la API de GIPHY"
				/>
			</Helmet>

			<section className="Home">
				<SearchForm />

				<div className="Home-content">
					<ListOfGifs gifs={gifs} title="&Uacute;ltimo Resultado" />

					<TrendingSearches />
				</div>
			</section>
		</>
	);
};

export default Home;
