// @midudev API de Usuarios con Deno
import { ENDPOINT } from "./settings";

const login = ({ username, password }) => {
	return fetch(`${ENDPOINT}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	})
		.then((Response) => {
			console.log(Response);

			if (Response.ok) {
				return Response.json();
			} else {
				throw new Error("Response is NOT OK");
			}
		})
		.then((Response) => {
			const { jwt } = Response;

			return jwt;
		});
};

export default login;
