import { useCallback, useContext } from "react";
import Context from "../context/UserContext";

const useUser = () => {
	const { jwt, setJWT } = useContext(Context);

	const login = useCallback(() => {
		setJWT("test");
	}, [setJWT]);

	const logout = useCallback(() => {
		setJWT("");
	}, [setJWT]);

	return {
		isLogged: Boolean(jwt),
		login,
		logout,
	};
};

export default useUser;
