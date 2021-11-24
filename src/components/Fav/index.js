import React from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import FavFilledIcon from "images/favorite_white_24dp.svg";
import FavOutlinedIcon from "images/favorite_border_white_24dp.svg";
import "./styles.css";

const Fav = ({ id }) => {
	const { isLogged, favs, addFav } = useUser();

	const [, setLocation] = useLocation();

	const isFav = favs.some((favId) => favId === id);

	const handleClick = () => {
		if (!isLogged) setLocation("/login");

		addFav({ id });
	};

	const [label, altText, icon] = isFav
		? ["Remover GIF como Favorito", "Icono de GIF Favorito", FavFilledIcon]
		: [
				"Añadir GIF a Lista de Favoritos",
				"Icono para seleccionar GIF como Favorito",
				FavOutlinedIcon,
		  ];

	return (
		<button className="Fav" title={label} onClick={handleClick}>
			<img src={icon} alt={altText} height="24" width="24" />
		</button>
	);
};

export default Fav;
