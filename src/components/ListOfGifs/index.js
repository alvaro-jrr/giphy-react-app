import React from "react";
import Gif from "components/Gif";
import "./styles.css";

const ListOfGifs = ({ gifs, title }) => {
	return (
		<section className="ListOfGifs">
			<h2 className="ListOfGifs-title">{title}</h2>

			<div className="ListOfGifs-content">
				{gifs.map(({ id, listOfUrl, sizes, title }) => (
					<Gif
						key={id}
						gifId={id}
						listOfUrl={listOfUrl}
						sizes={sizes}
						title={title}
					/>
				))}
			</div>
		</section>
	);
};

export default ListOfGifs;
