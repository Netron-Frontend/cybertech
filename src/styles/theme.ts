export const theme = {
	colors: {},
	breakpoints: {
		mobile: '768px',
		tablet: '1024px',
		desktop: '1200px'
	},

	spacing: {
		xs: '4px',
		sm: '8px',
		md: '16px',
		lg: '24px',
		xl: '32px'
	},
	fonts: {
		primary: '"Inter", sans-serif'
	},

	// ВЕСА ШРИФТОВ (FONT WEIGHTS)
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800
	},

	// РАЗМЕРЫ ШРИФТОВ
	fontSizes: {
		xs: '0.75rem', // 12px
		sm: '0.875rem', // 14px
		base: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		'2xl': '1.5rem', // 24px
		'3xl': '1.875rem', // 30px
		'4xl': '2.25rem', // 36px
		'5xl': '3rem' // 48px
	},

	// ВЫСОТА СТРОКИ (LINE HEIGHT)
	lineHeights: {
		tight: 1.25,
		normal: 1.5,
		relaxed: 1.75,
		loose: 2
	},

	// LETTER SPACING
	letterSpacing: {
		tighter: '-0.05em',
		tight: '-0.025em',
		normal: '0',
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em'
	}
};
export type Theme = typeof theme;
