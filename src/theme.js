export const theme = {
	colors: {
		// Backgrounds
		backgroundLight: '#f6f6f6',
		backgroundWhite: '#ffffff',
		backgroundGray: '#e1e2e4',
		
		// Blues (principales)
		blue: '#112250ed',
		blue1: '#0f366e',
		blue2: '#0b3165',
		blue3: '#a5b7d2',
		blue4: '#8c95b8',
		
		// Dark blues/purples
		darkBlue: '#181461',
		darkBlue1: '#121526',
		darkBlue2: '#0f1449',
		darkBlue3: '#050921',
		darkBlue4: '#170c37',
		darkBlue5: '#180b2c',
		
		// Purples
		purple: '#3a0b45',
		
		// Browns/oranges
		brown: '#612a14',
		brown1: '#261812',
		brown2: '#2e201a',
		brown3: '#451c0b',
		orange: '#f5a17c',
		
		// Teals
		teal: '#5d8b9a',
		
		// Light colors
		cream: '#fffbf5',
		lightGray: '#a5b7d2',
	},
	
	fonts: {
		primary: '"League Spartan", sans-serif',
		secondary: '"Epilogue", sans-serif',
	},
	
	fontSizes: {
		small: '12px',
		medium: '13px',
		large: '16px',
		xl: '22px',
		xxl: '25px',
		xxxl: '30px',
		huge: '32px',
		massive: '35px',
		giant: '50px',
		enormous: '55px',
	},
	
	breakpoints: {
		mobile: '768px',
	},
}

// Helper functions pour les media queries
export const media = {
	mobile: `@media (min-width: ${theme.breakpoints.mobile})`,
}

export default theme