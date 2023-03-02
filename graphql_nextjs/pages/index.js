import React from 'react';
import { addApolloState, initializeApollo } from '../utils/apollo';
import { GET_POSTS } from '../queries/getPosts.query';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

const Home = (props) => {
	return (
		<div>
			<Link href="/test">테스트 페이지</Link>
		</div>
	);
};

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();

	const { data } = await apolloClient.query({
		query: GET_POSTS,
	});

	return addApolloState(apolloClient, { props: { posts: data.getPosts.posts } });
};

export default Home;
