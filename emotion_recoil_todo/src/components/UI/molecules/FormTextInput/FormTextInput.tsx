import React from 'react';
import styled from '@emotion/styled';
import InputBox from './InputBox';

const StyledFormTextInput = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px 0;
	font-weight: 700;
`;

interface Props {
	type: string;
}

const FormTextInput = ({ type }: Props) => {
	return (
		<>
			<StyledFormTextInput>
				<span>Add Todo</span>
				<InputBox type={type} />
			</StyledFormTextInput>
		</>
	);
};

export default FormTextInput;
