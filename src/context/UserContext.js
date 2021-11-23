import React, { useState } from "react";

const Context = React.createContext({});

export const UserContextProvider = ({ children }) => {
	// Javascript Web Token
	const [jwt, setJWT] = useState("");

	return (
		<Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
	);
};

export default Context;
