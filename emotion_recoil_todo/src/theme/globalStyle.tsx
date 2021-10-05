import React from 'react';
import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import { ThemeType } from './index';

interface GlobalStyleProps {
	theme: ThemeType;
}

const GlobalStyle = ({ theme }: GlobalStyleProps) => (
	<Global
		styles={css`
			${reset}

			html, body, #__next {
				height: 100%;
			}
			html,
			body {
				overflow-x: hidden;
				width: 100%;
				height: 100%;
				color: ${theme.PRIMARY_COLOR};
			}
			body {
				overflow-y: overlay;
				margin: 0;
				font-size: 14px;
				line-height: 1.5715;
				user-select: none;
			}
			a {
				text-decoration: none;
				outline: none;
			}
			& * {
				font-family: 'Noto Sans KR', sans-serif !important;
			}
		`}
	/>
);

export default GlobalStyle;
