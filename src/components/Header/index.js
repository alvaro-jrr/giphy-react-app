import React from "react";
import useUser from "hooks/useUser";
import { Link, useLocation } from "wouter";
import "./styles.css";

const Header = () => {
	const { isLogged, logout } = useUser();
	const [location, setLocation] = useLocation();
	const [isLoginPage, isRegisterPage] = [
		location === "/login",
		location === "/register",
	];

	return (
		<>
			<header className="Header">
				<Link to="/">
					<h1 className="Header-title">Giphy App</h1>
				</Link>

				<div className="Header-buttons">
					{isLoginPage ||
						isRegisterPage ||
						(isLogged ? (
							<button onClick={logout} className="btn">
								Logout
							</button>
						) : (
							<>
								<button
									onClick={() => setLocation("/register")}
									className="btn"
								>
									Register
								</button>

								<button
									onClick={() => setLocation("/login")}
									className="btn"
								>
									Login
								</button>
							</>
						))}
				</div>
			</header>
		</>
	);
};

export default React.memo(Header);
