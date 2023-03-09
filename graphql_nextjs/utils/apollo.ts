import { useMemo } from 'react';
import { AppProps } from 'next/app';

import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const createApolloClient = () => {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: 'http://localhost:3065/graphql',
			credentials: 'include',
		}),
		cache: new InMemoryCache(),
	});
};

export const initializeApollo = (initialState = null) => {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = _apolloClient.extract();

		const data = merge(initialState, existingCache, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
			],
		});

		_apolloClient.cache.restore(data);
	}
	if (typeof window === 'undefined') return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
};

export const useApollo = (pageProps: AppProps['pageProps']) => {
	const initialState = pageProps?.[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) => {
	if (pageProps?.props) pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();

	return pageProps;
};
