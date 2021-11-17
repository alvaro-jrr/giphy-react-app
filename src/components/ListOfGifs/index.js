import React from "react";
import Gif from "components/Gif";
import "./styles.css";

const ListOfGifs = ({ gifs, title }) => {
	return (
		<section className="ListOfGifs">
			<h2 className="ListOfGifs-title">{title}</h2>

			<div className="ListOfGifs-content">
				{gifs.map(({ id, url, title }) => (
					<Gif key={id} gifId={id} url={url} title={title} />
				))}
			</div>
		</section>
	);
};

export default ListOfGifs;
