import React from "react";
import { Link } from "wouter";
import Fav from "components/Fav";
import useNearScreen from "hooks/useNearScreen";
import "./styles.css";

const Gif = ({ gifId, listOfUrl, sizes, title }) => {
	const { isNearScreen, fromRef } = useNearScreen({
		onlyCheckViewport: true,
	});

	const { mp4, webp } = listOfUrl;
	const { width, height } = sizes;

	// if img isn't visible then loading is set to lazy and decoding async
	const [isLazy, isDecodingAsync] = isNearScreen
		? [null, null]
		: ["lazy", "async"];

	return (
		<figure ref={fromRef} className="Gif">
			<div className="Gif-buttons">
				<Fav id={gifId} />
			</div>

			<Link className="Gif-link" to={`/details/${gifId}`}>
				<picture>
					<source
						className="Gif-img"
						srcSet={webp}
						type="image/webp"
					/>

					<img
						width={width}
						height={height}
						className="Gif-img"
						loading={isLazy}
						decoding={isDecodingAsync}
						src={mp4}
						alt={title}
					/>
				</picture>

				<figcaption className="Gif-title">{title}</figcaption>
			</Link>
		</figure>
	);
};

export default React.memo(
	Gif,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
