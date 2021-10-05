import React from 'react';
import styled from '@emotion/styled';
import RowFrame from '@frames/RowFrame';
import Logo from '@molecules/Logo';

const StyledHeaderSection = styled.header`
	position: sticky;
	top: 0;
	background-color: #ffffff;
	border-bottom: 1px solid #cccccc;

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 80px;
	}
`;

const HeaderSection: React.FC = () => (
	<>
		<StyledHeaderSection>
			<RowFrame>
				<Logo logoName={'TODO LIST'} />
				<div>nav</div>
			</RowFrame>
		</StyledHeaderSection>
	</>
);

export default HeaderSection;
