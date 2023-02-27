import React from 'react';
import { addApolloState, initializeApollo } from '../utils/apollo';
import { GET_POSTS } from '../queries/getPosts.query';
import { useQuery } from '@apollo/client';

const Test = () => {
	const { client, data } = useQuery(GET_POSTS);

	return <div>asdasd</div>;
};

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query({
		query: GET_POSTS,
		variables: { input: {} },
	});

	return addApolloState(apolloClient, { props: { posts: data.getPosts.posts } });
};

export default Test;
