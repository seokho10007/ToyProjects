import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

const StyledLogo = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.LOG_SIZE};
	font-weight: bold;

	cursor: pointer;
`;

interface Props {
	logoName: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Logo = ({ logoName }: Props): ReactElement => <StyledLogo>{logoName}</StyledLogo>;

export default Logo;
