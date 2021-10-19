import React from 'react';
import styled from '@emotion/styled';

const StyledPrimaryButton = styled.button`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-weight: 300;
	cursor: pointer;
`;

interface ButtonProps {
	name: string;
	onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
	type?: 'button' | 'submit';
}

const PrimaryButton = ({ name, onClick, type }: ButtonProps) => (
	<StyledPrimaryButton onClick={onClick} type={type}>
		{name}
	</StyledPrimaryButton>
);

PrimaryButton.defaultProps = {
	type: 'button',
};

export default PrimaryButton;
