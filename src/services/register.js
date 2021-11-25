// @midudev API de Usuarios con Deno
import { ENDPOINT } from "./settings";

const register = ({ username, password }) => {
	return fetch(`${ENDPOINT}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	}).then((Response) => {
		if (Response.ok) {
			return true;
		} else {
			throw new Error("Response is NOT OK");
		}
	});
};

export default register;
