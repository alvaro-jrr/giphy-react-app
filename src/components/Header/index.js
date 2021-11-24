import React from "react";
import useUser from "hooks/useUser";
import { Link, useLocation } from "wouter";
import "./styles.css";
import Button from "components/Button";

const Header = () => {
	const { isLogged, logout } = useUser();
	const [, setLocation] = useLocation();

	return (
		<header className="Header">
			<Link to="/">
				<h1 className="Header-title">Giphy App</h1>
			</Link>

			{isLogged ? (
				<Button
					handleClick={logout}
					className="Danger"
					content="Logout"
				/>
			) : (
				<Button
					handleClick={() => setLocation("/login")}
					content="Login"
				/>
			)}
		</header>
	);
};

export default React.memo(Header);
