import { API_KEY, API_URL } from "./settings";

const fromApiToSingleGif = (response) => {
	const { data = [] } = response;
	const { id, images, title } = data;
	const { webp, mp4, width, height } = images.fixed_width;
	const listOfUrl = { webp, mp4 };
	const sizes = { width, height };

	return { id, listOfUrl, sizes, title };
};

const getSingleGif = ({ id }) => {
	const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

	return fetch(apiURL)
		.then((response) => response.json())

		.then(fromApiToSingleGif);
};

export default getSingleGif;
