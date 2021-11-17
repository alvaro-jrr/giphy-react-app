import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

const Details = ({ params }) => {
	const { id } = params;
	const { gif, isLoading, isError } = useSingleGif({ id });
	const title = gif ? gif.title : "";

	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Cargando...</title>
				</Helmet>

				<Spinner />
			</>
		);
	}

	if (isError) return <Redirect to="/404" />;
	if (!gif) return null;

	return (
		<>
			<Helmet>
				<title>{`Giphy App | ${title}`}</title>
				<meta name="description" content={`Detalles 🛈 de ${title}`} />
			</Helmet>

			<section className="Details">
				<h2 className="Details-title">{title}</h2>
				<Gif {...gif} gifId={id} />
			</section>
		</>
	);
};

export default Details;
