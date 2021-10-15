import React from 'react';
import styled from '@emotion/styled';
import RowFrame from '@frames/RowFrame';
import SignInForm from '@molecules/SignInForm';

const StyledSignInForm = styled.div`
	width: 100%;
`;

const SignInContainer: React.FC = () => {
	return (
		<>
			<StyledSignInForm>
				<RowFrame>
					<SignInForm />
				</RowFrame>
			</StyledSignInForm>
		</>
	);
};

export default SignInContainer;
