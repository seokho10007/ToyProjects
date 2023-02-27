import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

let apolloClient;
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: 'http://localhost:3065/graphql',
			credentials: 'include',
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = _apolloClient.extract();

		console.log({ initialState, existingCache });

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
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
export const addApolloState = (client, pageProps) => {
	if (pageProps?.props) pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();

	return pageProps;
};
