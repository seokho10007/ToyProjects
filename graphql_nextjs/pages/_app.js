import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';

function MyApp({ Component, pageProps }) {
	const client = useApollo(pageProps);

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
