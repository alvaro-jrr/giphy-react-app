import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Gif = ({ gifId, url, title }) => {
	return (
		<Link className="Gif" to={`/details/${gifId}`}>
			<img
				width="200"
				height="200"
				className="Gif-img"
				loading="lazy"
				src={url}
				alt={title}
			/>
			<span className="Gif-title">{title}</span>
		</Link>
	);
};

export default React.memo(
	Gif,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
