import React from 'react';

import styled from '@emotion/styled';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';

const StyledAppLayout = styled.div`
	height: calc(100% - 100px);
	position: relative;
	padding-bottom: 100px;
`;

const AppLayout: React.FC = ({ children }) => (
	<>
		<StyledAppLayout>
			<Header />
			{children}
			<Footer />
		</StyledAppLayout>
	</>
);

export default AppLayout;
