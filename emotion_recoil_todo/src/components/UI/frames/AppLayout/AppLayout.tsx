import React from 'react';

import styled from '@emotion/styled';
import Header from '../../organisms/Header';
// import Header from '@organisms/Header';

const StyledAppLayout = styled.div`
	min-height: calc(100% - 140px);
	position: relative;
	padding-bottom: 140px;
	background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
`;

const AppLayout: React.FC = ({ children }) => (
	<>
		<StyledAppLayout>
			<Header />
			{children}
		</StyledAppLayout>
	</>
);

export default AppLayout;
