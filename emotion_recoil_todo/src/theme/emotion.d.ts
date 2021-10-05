import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		BACKGROUND_COLOR: string;
		BACKGROUND_COLOR_RGBA: string;
		PRIMARY_COLOR: string;
		LIGHT_GREY: string;
		DARK_GREY: string;
		BP: {
			HDPC: string;
			PC: string;
			TABLET: string;
			MOBILE: string;
		};
		FONT_SIZE: {
			PRIMARY_SIZE: string;
			LOG_SIZE: string;
		};
	}
}
