import React from "react";
import { Link } from "wouter";
import Fav from "components/Fav";
import "./styles.css";

const Gif = ({ gifId, url, title }) => {
	return (
		<div className="Gif">
			<div className="Gif-buttons">
				<Fav id={gifId} />
			</div>

			<Link className="Gif-link" to={`/details/${gifId}`}>
				<img
					width="320"
					height="200"
					className="Gif-img"
					loading="lazy"
					src={url}
					alt={title}
				/>

				<span className="Gif-title">{title}</span>
			</Link>
		</div>
	);
};

export default React.memo(
	Gif,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
