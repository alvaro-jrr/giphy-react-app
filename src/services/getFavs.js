// @midudev API de Usuarios con Deno
import { ENDPOINT } from "./settings";

const getFavs = ({ jwt }) => {
	return fetch(`${ENDPOINT}/favs`, {
		method: "GET",
		headers: {
			Authorization: jwt,
			"Content-Type": "application/json",
		},
	})
		.then((Response) => {
			if (Response.ok) {
				return Response.json();
			} else {
				throw new Error("Response is NOT OK");
			}
		})
		.then((Response) => {
			const { favs } = Response;

			return favs;
		});
};

export default getFavs;
