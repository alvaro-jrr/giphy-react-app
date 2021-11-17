import React, { useState, useEffect } from "react";
import Category from "components/Category";
import getTrending from "services/getTrending";

// Funcion que obtiene los Trending
const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		let isMounted = true;

		getTrending().then((data) => {
			if (isMounted) setTrends(data);
		});

		return () => (isMounted = false);
	}, []);

	return <Category title="Tendencias" content={trends} />;
};

export default TrendingSearches;
