import styled from '@emotion/styled';
import React from 'react';

const StyledCard = styled.div`
	min-width: 100px;
	min-height: 100px;
	padding: 10px;
	box-sizing: border-box;

	border-radius: 5px;
	border: 1px solid #ccc;
	background-color: ${({ theme }) => theme.BACKGROUND_COLOR.PRIMARY_COLOR};
`;

interface Props {
	children: React.ReactNode;
}

const Card = ({ children }: Props) => (
	<>
		<StyledCard>{children}</StyledCard>
	</>
);

export default Card;
