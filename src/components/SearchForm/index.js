import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import Button from "components/Button";
import SearchIcon from "images/search_white_24dp.svg";
import ResetIcon from "images/restart_alt_white_24dp.svg";
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
		updateKeyword,
		updateRating,
		updateLanguage,
		resetFilters,
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

	// Reinicia los filtros
	const handleReset = (evt) => {
		evt.preventDefault();
		resetFilters();
	};

	// Navegar a otra ruta
	const handleSubmit = (evt) => {
		evt.preventDefault();
		setLocation(`/search/${keyword}/${rating}/${language}`);
	};

	return (
		<form className="SearchForm" onSubmit={handleSubmit}>
			<div className="Search">
				<input
					className="Search-input"
					onChange={handleChange}
					placeholder="Busca un Gif"
					type="text"
					value={keyword}
				/>

				<Button
					className="Search"
					handleClick={handleSubmit}
					title="Buscar"
					content={
						<img
							src={SearchIcon}
							alt="Icono de Búsqueda"
							width="24"
							height="24"
						/>
					}
				/>
			</div>

			<div className="Filters">
				<select
					className="Filter"
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
					className="Filter"
					onChange={handleChangeLanguage}
					value={language}
				>
					<optgroup label="Idioma">
						{LANGUAGES.map((language) => (
							<option key={language}>{language}</option>
						))}
					</optgroup>
				</select>

				<Button
					handleClick={handleReset}
					className="Reset"
					title="Reiniciar filtros"
					content={
						<img
							src={ResetIcon}
							alt="Icono de Reinicio de Filtros"
							width="24"
							height="24"
						/>
					}
				/>
			</div>
		</form>
	);
};

// Memorizar el componente, para evitar renderizados cuando no cambian sus props
export default React.memo(SearchForm);
