import { API_KEY, API_URL } from "./settings";

const fromApiToSingleGif = (response) => {
	const { data = [] } = response;
	const { id, images, title } = data;
	const { url } = images.downsized_medium;

	return { id, url, title };
};

const getSingleGif = ({ id }) => {
	const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

	return fetch(apiURL)
		.then((response) => response.json())

		.then(fromApiToSingleGif);
};

export default getSingleGif;
