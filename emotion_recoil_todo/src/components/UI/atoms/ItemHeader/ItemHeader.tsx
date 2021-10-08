import styled from '@emotion/styled';
import React from 'react';

interface Props {
	title: string;
}

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #ccc;

	& > span {
		font-size: 20px;
		padding: 10px 0;
		font-weight: 600;
	}
`;

const ItemHeader = ({ title }: Props) => (
	<>
		<StyledHeader>
			<span>{title}</span>
		</StyledHeader>
	</>
);

export default ItemHeader;
