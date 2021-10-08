import styled from '@emotion/styled';
import React from 'react';
import RowFrame from '../../frames/RowFrame';

const StyledFooterContainer = styled.div`
	width: 100%;
	height: 80px;
	position: absolute;
	background-color: ${({ theme }) => theme.BACKGROUND_COLOR.SECOND_COLOR};
	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
`;

const FooterInner = styled.div`
	width: 100%;
	padding: 0 10px;
	border-top: 1px solid #cccccc;
	height: 100%;
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FooterContainer: React.FC = () => {
	return (
		<>
			<StyledFooterContainer>
				<RowFrame>
					<FooterInner>Footer</FooterInner>
				</RowFrame>
			</StyledFooterContainer>
		</>
	);
};

export default FooterContainer;
