import React from 'react';
import styled from '@emotion/styled';
import RowFrame from '@frames/RowFrame';
import SignUpForm from '@molecules/SignUpForm/SignUpForm';

const StyledSignUpContainer = styled.div`
	width: 100%;
`;

const SignUpContainer: React.FC = () => {
	return (
		<>
			<StyledSignUpContainer>
				<RowFrame>
					<SignUpForm />
				</RowFrame>
			</StyledSignUpContainer>
		</>
	);
};

export default SignUpContainer;
