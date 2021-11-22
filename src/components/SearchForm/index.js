import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import Button from "components/Button";
import "./styles.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

const LANGUAGES = ["en", "es", "pt"];

const SearchForm = ({
	initialKeyword = "",
	initialRating = "g",
	initialLanguage = "en",
}) => {
	const [, setLocation] = useLocation();

	const {
		keyword,
		rating,
		language,
		times,
		updateKeyword,
		updateRating,
		updateLanguage,
	} = useForm({
		initialKeyword,
		initialRating,
		initialLanguage,
	});

	// Actualiza el valor de keyword
	const handleChange = (evt) => updateKeyword(evt.target.value);

	// Actualiza el valor del rating
	const handleChangeRating = (evt) => updateRating(evt.target.value);

	// Actualiza el valor del language
	const handleChangeLanguage = (evt) => updateLanguage(evt.target.value);

	// Navegar a otra ruta
	const handleSubmit = (evt) => {
		evt.preventDefault();
		setLocation(`/search/${keyword}/${rating}/${language}`);
	};

	return (
		<form className="SearchForm" onSubmit={handleSubmit}>
			<input
				className="SearchForm-input"
				onChange={handleChange}
				placeholder="Busca un Gif"
				type="text"
				value={keyword}
			/>

			<select
				className="SearchForm-select"
				onChange={handleChangeRating}
				value={rating}
			>
				<optgroup label="Clasificaci&oacute;n">
					{RATINGS.map((rating) => (
						<option key={rating}>{rating}</option>
					))}
				</optgroup>
			</select>

			<select
				className="SearchForm-select"
				onChange={handleChangeLanguage}
				value={language}
			>
				<optgroup label="Idioma">
					{LANGUAGES.map((language) => (
						<option key={language}>{language}</option>
					))}
				</optgroup>
			</select>

			<Button text="Buscar" />

			<small>{times}</small>
		</form>
	);
};

// Memorizar el componente, para evitar renderizados cuando no cambian sus props
export default React.memo(SearchForm);
