import React, { useState } from 'react';
import Link from 'next/link';
import {
	DocumentNode,
	OperationVariables,
	QueryHookOptions,
	QueryResult,
	TypedDocumentNode,
	useQuery,
} from '@apollo/client';
import { addApolloState, initializeApollo } from '../utils/apollo';
import { GET_POSTS } from '../queries/getPosts.query';
import { GetServerSideProps } from 'next';

interface CoreResponse {
	ok: boolean;
	error: any;
}

interface CoreVariants<T> {
	input: T;
}

type CoreResult<QueryName extends string, Input = CoreResponse> = {
	[key in QueryName]: Input;
};

interface IPost {
	_id: string;
	content: string;
	coverImg: string;
	category: string;
	title: string;
	createdAt: string;
	isTemporary: boolean;
	__typename?: string;
}

type IBasePosts = {
	posts: IPost[];
} & CoreResponse;

type IGetPosts = CoreResult<'getPosts', IBasePosts>;

interface Qwe<TData = any, TVariables extends OperationVariables = OperationVariables>
	extends QueryResult<TData, TVariables> {
	data: TData;
}

function useMyQuery<T = any, Q extends OperationVariables = OperationVariables>(
	query: DocumentNode | TypedDocumentNode<T, Q>,
	options?: QueryHookOptions<T, Q>,
): Qwe<T, Q> {
	const result = useQuery<T, Q>(query, {
		...options,
		onCompleted(data) {
			setData(data);
		},
	});

	if (!result.data) throw new Error('data is undefined');

	const [data, setData] = useState<T>(result.data);

	return { ...result, data };
}

const Test = () => {
	const { data } = useMyQuery<IGetPosts>(GET_POSTS);

	return (
		<div>
			<Link href="/">홈 페이지</Link>
			<div>
				{data.getPosts.posts.map((post) => (
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const apolloClient = initializeApollo();

	await apolloClient.query({ query: GET_POSTS });

	return addApolloState(apolloClient, { props: {} });
};

export default Test;
