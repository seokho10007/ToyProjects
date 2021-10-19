import React from 'react';
import styled from '@emotion/styled';

const StyledDefaultButton = styled.button`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-weight: 300;
	background-color: #f2f2f2;
	cursor: pointer;
`;

interface ButtonProps {
	name: string;
	onClick?: (e?: React.MouseEvent) => void;
	type?: 'button' | 'submit';
}

const DefaultButton = ({ name, onClick, type }: ButtonProps) => (
	<StyledDefaultButton onClick={onClick} type={type}>
		{name}
	</StyledDefaultButton>
);

DefaultButton.defaultProps = {
	type: 'button',
};

export default DefaultButton;
