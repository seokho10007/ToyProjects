import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { addApolloState, initializeApollo } from '../utils/apollo';
import { GET_POSTS } from '../queries/getPosts.query';

const useCustomQuery = (query, options) => {
	const result = useQuery(query, options);

	if (!result.data) throw new Error('데이터가 존재하지 않습니다.');

	return result;
};

const Test = () => {
	const { data } = useCustomQuery(GET_POSTS);

	return (
		<div>
			<Link href="/">홈 페이지</Link>
			<div>
				{data.getPosts.posts.map((post, i) => (
					<div key={post._id} style={{ marginBottom: '20px' }}>
						<div>아이디: {post._id}</div>
						<div>제목: {post.title}</div>
						<div>카테고리: {post.category}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export const getServerSideProps = async (ctx) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: GET_POSTS });

	return addApolloState(apolloClient, { props: {} });
};

export default Test;
