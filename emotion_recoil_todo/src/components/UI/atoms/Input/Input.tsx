import styled from '@emotion/styled';
import React from 'react';

interface IProps {
	type?: 'text' | 'password';
	placeholder?: string;
	onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const StyledInput = styled.input`
	border: none;
	&:focus {
		outline: none;
	}
`;

const Input: React.FC<IProps> = ({ type, placeholder, onChange, value }) => (
	<StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} />
);

Input.defaultProps = {
	type: 'text',
	placeholder: '',
};

export default Input;
