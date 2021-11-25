import React from "react";
import { Link } from "wouter";
import Fav from "components/Fav";
import "./styles.css";
import useNearScreen from "hooks/useNearScreen";

const Gif = ({ gifId, url, title }) => {
	const { isNearScreen, fromRef } = useNearScreen();

	// if img isn't visible then loading is set to lazy
	const loadingType = isNearScreen ? null : "lazy";

	return (
		<div ref={fromRef} className="Gif">
			<div className="Gif-buttons">
				<Fav id={gifId} />
			</div>

			<Link className="Gif-link" to={`/details/${gifId}`}>
				<img
					width="320"
					height="200"
					className="Gif-img"
					loading={loadingType}
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
