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

			// Obtencion del url del objeto images, propiedad fixed_height
			const { url } = images.fixed_height_downsampled;

			// Retorno del Objeto con la Informacion necesaria
			return { id, url, title };
		});

		return gifs;
	} else {
		return [];
	}
};

const getGifs = async ({ limit = 25, keyword, page = 0 } = {}) => {
	// URL con el parametro de busqueda y la llave del API
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}
		&q=${keyword}&limit=${limit}&offset=${page * limit}
		&rating=g&lang=en`;

	return fetch(apiURL)
		.then((response) =>
			response.ok ? response.json() : Promise.reject(response)
		)

		.then(fromApiToGifs)

		.catch(() => []);
};

export default getGifs;
