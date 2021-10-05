const breakPoint = {
	HDPC: '1200px',
	PC: '980px',
	TABLET: '768px',
	MOBILE: '480px',
};

export const theme = {
	BACKGROUND_COLOR: '#e5e5e5',
	BACKGROUND_COLOR_RGBA: 'rgba(255, 255, 255, 0.4)',
	PRIMARY_COLOR: '#23374D',
	LIGHT_GREY: '#B5B5B5',
	DARK_GREY: '#cccccc',
	BP: breakPoint,
	FONT_SIZE: {
		PRIMARY_SIZE: '14px',
		LOG_SIZE: '20px',
	},
};

export type ThemeType = typeof theme;
