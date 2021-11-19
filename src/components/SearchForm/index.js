import React, { useState } from "react";
import { useLocation } from "wouter";
import Button from "components/Button";
import "./styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = ({ initialKeyword = "", initialRating = "g" }) => {
	const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
	const [rating, setRating] = useState(initialRating);
	const [, setLocation] = useLocation();

	// Actualiza el valor de keyword
	const handleChange = (evt) => setKeyword(evt.target.value);

	// Maneja el evento al hacer submit, establece la nueva ubicacion
	const handleSubmit = (evt) => {
		// Previene el evento por default
		evt.preventDefault();

		// Navegar a otra ruta
		setLocation(`/search/${keyword}/${rating}`);
	};

	// Actualiza el valor del rating
	const handleChangeRating = (evt) => {
		setRating(evt.target.value);
	};

	return (
		<form className="Form" onSubmit={handleSubmit}>
			<input
				className="Form-input"
				onChange={handleChange}
				placeholder="Busca un Gif"
				type="text"
				value={keyword}
			/>

			<select
				className="Form-select"
				onChange={handleChangeRating}
				value={rating}
			>
				<option disabled>Rating Type</option>

				{RATINGS.map((rating) => (
					<option key={rating}>{rating}</option>
				))}
			</select>

			<Button text="Buscar" />
		</form>
	);
};

// Memorizar el componente, para evitar renderizados cuando no cambian sus props
export default React.memo(SearchForm);
