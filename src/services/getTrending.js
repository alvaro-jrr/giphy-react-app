import { API_KEY, API_URL } from "./settings";

const fromApiToTrending = (response) => {
	/*
		"response" devuelve un objeto 
		con el parametro "data" de "response"
		que es una matriz de Strings
	*/

	const { data = [] } = response;

	return data;
};

const getTrending = async () => {
	// URL con el parametro de busqueda y la llave del API
	const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

	return fetch(apiURL)
		.then((response) => response.json())

		.then(fromApiToTrending);
};

export default getTrending;
