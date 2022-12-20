import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	typography: {
		fontFamily: `Josefin Sans, sans-serif`,
		logo: {
			fontSize: 34,
			fontWeight: 700,
		},
		h1: {
			fontSize: 36,
			fontWeight: 700,
		},
		h2: {
			fontSize: 22,
			fontWeight: 700,
		},
		h3: {
			fontSize: 22,
			fontWeight: 700,
		},
	},
	palette: {
		primary: {
			main: "#7e33e0",
			"200": "#c1a0f0",
			"100": "#d9c6f6",
			"50": "#f1e8fb",
		},
		secondary: {
			main: "#fb2e86",
		},
		custom: {
			white: "#fff",
			pink: "#fb2e86",
		},
	},
});

declare module "@mui/material/styles" {
	interface TypographyVariants {
		logo: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		logo?: React.CSSProperties;
	}

	interface PaletteOptions {
		custom: {
			white: React.CSSProperties["color"];
			pink: React.CSSProperties["color"];
		};
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		logo: true;
	}
}
