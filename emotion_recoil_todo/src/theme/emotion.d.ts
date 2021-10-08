import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		BACKGROUND_COLOR: {
			PRIMARY_COLOR: string;
			SECOND_COLOR: string;
		};
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
		FONT_COLOR: {
			PRIMARY_COLOR: string;
		};
	}
}
