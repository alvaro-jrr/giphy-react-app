import { useContext, useState, useEffect } from "react";
import GifsContext from "context/GifsContext";
import getGifs from "services/getGifs";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword = null, rating = "g", language = "es" } = {}) => {
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const [page, setPage] = useState(INITIAL_PAGE);
	const { gifs, setGifs } = useContext(GifsContext);

	// Retorna el elemento que esté definido
	const keywordToUse =
		keyword ?? localStorage.getItem("lastKeyword") ?? "random";

	useEffect(() => {
		setLoading(true);

		// Si no hay "keyword", recuperamos la del localStorage
		getGifs({ keyword: keywordToUse, rating, language }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);

			// Guardamos la "keyword" en el localStorage
			localStorage.setItem("lastKeyword", keywordToUse);
		});
	}, [keywordToUse, setGifs, rating, language]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		setLoadingNextPage(true);

		getGifs({ keyword: keywordToUse, page, rating, language }).then(
			(nextGifs) => {
				setGifs((prevGifs) => prevGifs.concat(nextGifs));
				setLoadingNextPage(false);
			}
		);
	}, [page, keywordToUse, setGifs, rating, language]);

	return { gifs, loading, loadingNextPage, setPage };
};

export default useGifs;
