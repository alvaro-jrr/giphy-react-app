import React, { useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import FavFilledIcon from "images/favorite_white_24dp.svg";
import FavOutlinedIcon from "images/favorite_border_white_24dp.svg";
import "./styles.css";

const Fav = ({ id }) => {
	const { isLogged, favs, addFav } = useUser();
	const [showModal, setShowModal] = useState(false);
	const isFav = favs.some((favId) => favId === id);

	const handleClick = () => (isLogged ? addFav({ id }) : setShowModal(true));

	const handleClose = () => {
		setShowModal(false);
	};

	const [label, altText, icon] = isFav
		? ["Remover GIF como Favorito", "Icono de GIF Favorito", FavFilledIcon]
		: [
				"Añadir GIF a Lista de Favoritos",
				"Icono para seleccionar GIF como Favorito",
				FavOutlinedIcon,
		  ];

	// If user is logged and showModel is true, then showModal is set to false
	isLogged && showModal && setShowModal(false);

	return (
		<>
			<button className="Fav" title={label} onClick={handleClick}>
				<img src={icon} alt={altText} height="24" width="24" />
			</button>

			{showModal && (
				<Modal onClose={handleClose}>
					<Login />
				</Modal>
			)}
		</>
	);
};

export default Fav;
