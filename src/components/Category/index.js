import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Category = ({ title, content }) => {
	return (
		<section className="Category">
			<h2 className="Category-title">{title}</h2>

			<ul className="Category-terms">
				{content.map((singleContent) => {
					return (
						<li className="term" key={singleContent}>
							<Link to={`/search/${singleContent}`}>
								{singleContent}
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Category;
