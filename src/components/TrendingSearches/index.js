import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

// Importa el componente TS cuando sea necesario
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrending = () => {
	const { isNearScreen, fromRef } = useNearScreen();

	// El div que sera mostrado se especifica como el elementRef
	return (
		<div ref={fromRef}>
			{/*
                Con el comp. Suspense se especifica
                el fall
            */}

			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	);
};

export default LazyTrending;
