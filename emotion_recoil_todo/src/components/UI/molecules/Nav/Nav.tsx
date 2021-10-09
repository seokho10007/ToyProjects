import styled from '@emotion/styled';
import React from 'react';
import LinkBox from '../../atoms/LinkBox';

const StyledNav = styled.div`
	display: flex;

	& > div:first-of-type {
		margin-right: 10px;
	}
`;

const Nav: React.FC = () => {
	return (
		<>
			<StyledNav>
				<LinkBox src="/signup" name="회원가입" />
				<LinkBox src="/signin" name="로그인" />
			</StyledNav>
		</>
	);
};

export default Nav;
