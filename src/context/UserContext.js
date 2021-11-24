import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";

const Context = React.createContext({});

export const UserContextProvider = ({ children }) => {
	// Javascript Web Token
	const [jwt, setJWT] = useState(() => sessionStorage.getItem("jwt"));

	// Favoritos
	const [favs, setFavs] = useState([]);

	// Obtener favoritos
	useEffect(() => {
		if (jwt) {
			getFavs({ jwt }).then(setFavs);
		} else {
			return setFavs([]);
		}
	}, [jwt]);

	return (
		<Context.Provider value={{ jwt, setJWT, favs, setFavs }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
