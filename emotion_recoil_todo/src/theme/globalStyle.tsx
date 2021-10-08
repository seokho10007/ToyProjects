import React from 'react';
import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import { ThemeType } from './index';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

interface GlobalStyleProps {
	theme: ThemeType;
}

const GlobalStyle = ({ theme }: GlobalStyleProps): EmotionJSX.Element => (
	<Global
		styles={css`
			${reset}

			html, body, #root {
				height: 100%;
				background-color: ${theme.BACKGROUND_COLOR.SECOND_COLOR};
			}
			html,
			body {
				overflow-x: hidden;
			}
			body {
				overflow-y: overlay;
				margin: 0;
				font-size: 16px;
				line-height: 1.5715;
				user-select: none;
				width: 100%;
				height: 100%;
			}
			a {
				text-decoration: none;
				outline: none;
				color: ${theme.FONT_COLOR.PRIMARY_COLOR};
			}
			& * {
				font-family: 'Noto Sans KR', sans-serif !important;
			}
		`}
	/>
);

export default GlobalStyle;
