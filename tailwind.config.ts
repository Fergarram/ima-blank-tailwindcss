import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,html}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"1fr-auto": "minmax(0, 1fr) auto",
				"auto-1fr": "auto minmax(0, 1fr)",
			},
			gridTemplateRows: {
				"1fr-auto": "minmax(0, 1fr) auto",
				"auto-1fr": "auto minmax(0, 1fr)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				line: {
					stronger: "var(--border-stronger)",
					strong: "var(--border-strong)",
					DEFAULT: "var(--border-default)",
				},
				muted: "var(--background-muted)",
				surface: {
					"75": "var(--background-surface-75)",
					"100": "var(--background-surface-100)",
					"200": "var(--background-surface-200)",
					"300": "var(--background-surface-300)",
					"400": "var(--background-surface-400)",
				},
				alt: {
					"200": "var(--background-alternative-200)",
					DEFAULT: "var(--background-alternative-default)",
				},
				fg: {
					muted: "var(--foreground-muted)",
					lighter: "var(--foreground-lighter)",
					light: "var(--foreground-light)",
					DEFAULT: "var(--foreground)",
				},
				brand: {
					DEFAULT: "var(--brand-default)",
					button: "var(--brand-button)",
					"button-dark": "var(--brand-button-dark)",
					link: "var(--brand-link)",
					bg: "var(--brand-bg)",
					"bg-dark": "var(--brand-bg-dark)",
				},
				btn: {
					DEFAULT: "var(--background-button-default)",
					outline: {
						DEFAULT: "var(--border-button-default)",
						hover: "var(--border-button-hover)",
					},
				},
				control: {
					bg: "var(--background-control)",
					outline: "var(--border-control)",
				},
				overlay: {
					DEFAULT: "var(--background-overlay-default)",
					hover: "var(--background-overlay-hover)",
					outline: "var(--border-overlay)",
				},
				selection: "var(--background-selection)",
				warning: {
					"200": "var(--warning-200)",
					"300": "var(--warning-300)",
					"400": "var(--warning-400)",
					"500": "var(--warning-500)",
					"600": "var(--warning-600)",
					DEFAULT: "var(--warning-default)",
				},
				destructive: {
					"200": "var(--destructive-200)",
					"300": "var(--destructive-300)",
					"400": "var(--destructive-400)",
					"500": "var(--destructive-500)",
					"600": "var(--destructive-600)",
					DEFAULT: "var(--destructive-default)",
				},
				secondary: {
					"200": "var(--secondary-200)",
					"400": "var(--secondary-400)",
					DEFAULT: "var(--secondary-default)",
				},
				code: {
					"1": "var(--code-block-1)",
					"2": "var(--code-block-2)",
					"3": "var(--code-block-3)",
					"4": "var(--code-block-4)",
					"5": "var(--code-block-5)",
				},
				transparent: "transparent",
				sidebar: {
					DEFAULT: "var(--sidebar-background)",
					foreground: "var(--sidebar-foreground)",
					primary: "var(--sidebar-primary)",
					"primary-foreground": "var(--sidebar-primary-foreground)",
					accent: "var(--sidebar-accent)",
					"accent-foreground": "var(--sidebar-accent-foreground)",
					border: "var(--sidebar-border)",
					ring: "var(--sidebar-ring)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				xs: "var(--borderradius-xs)",
				xl: "var(--borderradius-xl)",
			},
			animation: {
				spinner: "spinner 0.6s linear infinite",
				shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
			},
			keyframes: {
				spinner: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				shake: {
					"10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
					"20%, 80%": { transform: "translate3d(2px, 0, 0)" },
					"30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
					"40%, 60%": { transform: "translate3d(4px, 0, 0)" },
				},
			},
		},
	},
} satisfies Config;
