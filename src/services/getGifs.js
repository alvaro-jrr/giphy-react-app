import { API_KEY, API_URL } from "./settings";

const fromApiToGifs = (response) => {
	/*
		"response" devuelve un objeto 
		con el parametro "data" de "response"
		contiene la informacion que obtiene.
	*/

	const { data = [] } = response;

	if (Array.isArray(data)) {
		const gifs = data.map((gif) => {
			// Obtencion del id, objeto de images y el title del Gif
			const { id, images, title } = gif;
			const { mp4, webp, width, height } = images.fixed_width;
			const listOfUrl = { mp4, webp };
			const sizes = { width, height };

			// Retorno del Objeto con la Informacion necesaria
			return { id, listOfUrl, sizes, title };
		});

		return gifs;
	} else {
		return [];
	}
};

const getGifs = ({
	limit = 25,
	keyword,
	page = 0,
	rating = "g",
	language = "en",
} = {}) => {
	// URL con el parametro de busqueda y la llave del API
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}
		&q=${keyword}&limit=${limit}&offset=${page * limit}
		&rating=${rating}&lang=${language}`;

	return fetch(apiURL)
		.then((response) =>
			response.ok ? response.json() : Promise.reject(response)
		)

		.then(fromApiToGifs)

		.catch(() => []);
};

export default getGifs;
