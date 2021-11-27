import React, { Suspense } from "react";
import Spinner from "components/Spinner";

const Login = React.lazy(() => import("./Login"));

const LazyLogin = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Login />
		</Suspense>
	);
};

export default LazyLogin;
