import React, { useState } from "react";
import Button from "components/Button";
import "./styles.css";

const SearchForm = ({ onSubmit }) => {
	const [keyword, setKeyword] = useState("");

	// Actualiza el valor de keyword de acuerdo al input
	const handleChange = (evt) => setKeyword(evt.target.value);

	// Maneja el evento al hacer submit, establece la nueva ubicacion
	const handleSubmit = (evt) => {
		// Previene el evento por default
		evt.preventDefault();

		// Establece la nueva ruta
		onSubmit({ keyword });
	};

	return (
		<form className="Form" onSubmit={handleSubmit}>
			<input
				className="Form-input"
				onChange={handleChange}
				placeholder="Busca un Gif"
				type="text"
			/>

			<Button text="Buscar" />
		</form>
	);
};

// Memorizar el componente, para evitar renderizados cuando no cambian sus props
export default React.memo(SearchForm);
