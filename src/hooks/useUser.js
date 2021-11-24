import { useCallback, useContext, useState } from "react";
import Context from "context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

const useUser = () => {
	const { jwt, setJWT, favs, setFavs } = useContext(Context);

	const [state, setState] = useState({
		isLoading: false,
		isError: false,
	});

	const login = useCallback(
		({ username, password }) => {
			setState({ isLoading: true, isError: false });

			loginService({ username, password })
				.then((jwt) => {
					setState({ isLoading: false, isError: false });
					setJWT(jwt);

					// Guardar en el sessionStorage el JWT
					sessionStorage.setItem("jwt", jwt);
				})

				.catch((err) => {
					sessionStorage.removeItem("jwt");
					setState({ isLoading: false, isError: true });
					console.error(err);
				});
		},
		[setJWT]
	);

	const addFav = ({ id }) => {
		addFavService({ id, jwt })
			.then((fav) => setFavs(fav))
			.catch((err) => console.error(err));
	};

	const logout = useCallback(() => {
		sessionStorage.removeItem("jwt");
		setJWT("");
	}, [setJWT]);

	return {
		isLogged: Boolean(jwt),
		isLoading: state.isLoading,
		isError: state.isError,
		favs,
		addFav,
		login,
		logout,
	};
};

export default useUser;
