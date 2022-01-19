import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
	query getMovie($id: Int!) {
		movie(id: $id) {
			id
			title
			medium_cover_image
			description_intro
		}
	}
`;

const Detail = () => {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id: Number(id) },
	});

	const movie = data && data.movie;

	console.log(loading, data);

	if (loading) return 'loading';

	return <div>{movie.title}</div>;
};

export default Detail;
