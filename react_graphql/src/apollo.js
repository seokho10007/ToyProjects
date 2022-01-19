import { InMemoryCache, createHttpLink, ApolloClient } from '@apollo/client';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	cache,
	uri: 'https://movieql2.vercel.app/',
});

export default apolloClient;
