import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import LinkBox from '@atoms/LinkBox';

const StyledLogo = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.LOG_SIZE};
	font-weight: bold;
	transition: all 0.2s linear;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

interface Props {
	logoName: string;
}

const Logo = ({ logoName }: Props): ReactElement => (
	<StyledLogo>
		<LinkBox name={logoName} src="/" />
	</StyledLogo>
);

export default Logo;
