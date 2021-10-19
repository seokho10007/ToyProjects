import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledIcon = styled.svg`
	${(props: Props) =>
		props.completed &&
		css`
			fill: #2c90ff;
		`}
`;

interface Props {
	completed: boolean;
}
const CheckIcon = ({ completed }: Props) => (
	<StyledIcon
		completed={completed}
		xmlns="http://www.w3.org/2000/StyledIcon"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
	</StyledIcon>
);

export default CheckIcon;
