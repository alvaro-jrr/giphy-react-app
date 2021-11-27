import React, { Suspense } from "react";
import Spinner from "components/Spinner";

const Register = React.lazy(() => import("./Register"));

const LazyRegister = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Register />
		</Suspense>
	);
};

export default LazyRegister;
