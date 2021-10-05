import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Main from './pages/main';
import signin from './pages/signin';
import AppLayout from '@frames/AppLayout';
import GlobalStyle from '@theme/globalStyle';

const App: React.FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle theme={theme} />
				<AppLayout>
					<BrowserRouter>
						<Switch>
							<Route path="/" component={Main} exact />
							<Route path="/signin" component={signin} exact />
							<Route path="/signup" component={signin} exact />
						</Switch>
					</BrowserRouter>
				</AppLayout>
			</ThemeProvider>
		</>
	);
};

export default App;
