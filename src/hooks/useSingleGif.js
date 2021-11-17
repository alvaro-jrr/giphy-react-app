import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGlobalGifs from "./useGlobalGifs";

const useSingleGif = ({ id }) => {
	const gifs = useGlobalGifs();
	const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
	const [gif, setGif] = useState(gifFromCache);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (!gif) {
			setIsLoading(true);

			getSingleGif({ id })
				.then((gif) => {
					setIsLoading(false);
					setGif(gif);
				})

				.catch(() => {
					setIsLoading(false);
					setIsError(true);
				});
		} else {
			return null;
		}
	}, [gif, id]);

	return { gif, isLoading, isError };
};

export default useSingleGif;
