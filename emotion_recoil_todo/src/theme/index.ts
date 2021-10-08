import { Theme } from '@emotion/react';

const breakPoint = {
	HDPC: '1400px',
	PC: '980px',
	TABLET: '768px',
	MOBILE: '480px',
};

export const theme: Theme = {
	BACKGROUND_COLOR: {
		PRIMARY_COLOR: '#ffffff',
		SECOND_COLOR: '#e0e0e0',
	},
	FONT_SIZE: {
		PRIMARY_SIZE: '14px',
		LOG_SIZE: '20px',
	},
	FONT_COLOR: {
		PRIMARY_COLOR: 'black',
	},
	LIGHT_GREY: '#B5B5B5',
	DARK_GREY: '#cccccc',
	BP: breakPoint,
};

export type ThemeType = typeof theme;
