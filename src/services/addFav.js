// @midudev API de Usuarios con Deno
import { ENDPOINT } from "./settings";

const addFav = ({ id, jwt }) => {
	return fetch(`${ENDPOINT}/favs/${id}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ jwt }),
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

export default addFav;
