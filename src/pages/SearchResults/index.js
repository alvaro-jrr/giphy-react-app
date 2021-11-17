import React, { useCallback, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
	const { keyword } = params;

	const { gifs, loading, setPage } = useGifs({ keyword });

	const { isNearScreen, fromRef } = useNearScreen({ observeOnce: false });

	const title = gifs ? decodeURI(keyword) : "";

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
				<title>{`Giphy App | ${gifs.length} resultados de ${title}`}</title>
				<meta
					name="description"
					content={`Resultados de búsqueda 🔍 de ${title}`}
				/>
			</Helmet>

			<section className="SearchResults">
				<ListOfGifs gifs={gifs} title={title} />
				<div id="viewer" ref={fromRef}></div>
			</section>
		</>
	);
};

export default SearchResults;
