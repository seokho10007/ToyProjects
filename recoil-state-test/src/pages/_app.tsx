import type { AppContext, AppProps } from 'next/app';
import Link from 'next/link';
import { RecoilRoot } from 'recoil';
import { getInitializer } from '../states/test';

interface Props extends AppProps {
	a: string;
}

const MyApp = ({ Component, pageProps }: Props) => {
	return (
		<>
			<RecoilRoot>
				<div>
					<Link href="/">
						<a>HOME</a>
					</Link>
					<span> . </span>
					<Link href="/signin">
						<a>signin</a>
					</Link>
					<span> . </span>
					<Link href="/signup">
						<a>signup</a>
					</Link>
				</div>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
};
export default MyApp;
