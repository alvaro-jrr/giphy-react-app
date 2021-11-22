import React, { useCallback, useEffect } from "react";
import SearchForm from "components/SearchForm";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";

const SearchResults = ({ params }) => {
	const { keyword, rating, language } = params;
	const { gifs, loading, setPage } = useGifs({ keyword, rating, language });
	const { isNearScreen, fromRef } = useNearScreen({ observeOnce: false });
	const title = gifs ? decodeURI(keyword) : "";
	const [location] = useLocation();

	const debounceHandleNextPage = useCallback(
		() =>
			debounce(
				setPage((prevPage) => prevPage + 1),
				100
			),
		[setPage]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [isNearScreen, debounceHandleNextPage]);

	return loading ? (
		<>
			<Helmet>
				<title>Cargando...</title>
			</Helmet>

			<Spinner />
		</>
	) : (
		<>
			<Helmet>
				<title>{`Giphy App | ${gifs.length} Resultados de ${title}`}</title>
				<meta
					name="description"
					content={`Resultados de búsqueda 🔍 de ${title}`}
				/>
				<link
					rel="canonical"
					content={`https://giphy-app-alvaro-jrr.vercel.app${location}`}
				/>
			</Helmet>

			<section className="SearchResults">
				<SearchForm
					initialKeyword={keyword}
					initialRating={rating}
					initialLanguage={language}
				/>
				<ListOfGifs gifs={gifs} title={title} />
				<div id="viewer" ref={fromRef}></div>
			</section>
		</>
	);
};

export default SearchResults;
