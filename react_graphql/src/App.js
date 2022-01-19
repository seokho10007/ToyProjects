import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/:id" element={<Detail />} />
			</Routes>
		</Router>
	);
};

export default App;
