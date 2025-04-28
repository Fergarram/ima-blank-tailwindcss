import { tags, type TagArgs, type Child, type Props } from "@/lib/ima";

// Define button variants and sizes
export type ButtonVariant =
	| "primary"
	| "secondary"
	| "default"
	| "outline"
	| "link"
	| "text"
	| "danger"
	| "warning"
	| "avatar"
	| "input";
export type ButtonSize = "default" | "auto" | "lg" | "icon";

// Extended props for the Button component
export interface ButtonProps extends Props {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
}

// Implementation of Button component
export function Button(...args: TagArgs): HTMLElement {
	// Parse arguments
	let props: ButtonProps = {};
	let children: Child[] = [];

	if (args.length > 0) {
		const first_arg = args[0];

		// Check if first arg is props object
		if (first_arg && typeof first_arg === "object" && !(first_arg instanceof Node) && !Array.isArray(first_arg)) {
			// The first argument is a props object
			props = first_arg as ButtonProps;
			children = args.slice(1) as Child[];
		} else {
			// The first argument is a child
			children = args as Child[];
		}
	}

	// Extract variant and size from props
	const { variant = "default", size = "default", disabled = false, ...rest_props } = props;

	// Base classes for all button variants
	const base_classes =
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-70 dark:focus-visible:ring-neutral-300 border active:opacity-90";

	// Size-specific classes
	const size_classes = {
		default: "h-7 px-3 py-1.5",
		auto: "w-fit h-fit p-1",
		lg: "h-10 rounded-md px-8 text-sm",
		icon: "h-8 w-8",
	}[size];

	// Variant-specific classes with simplified whitespace
	let variant_classes = "";

	switch (variant) {
		case "primary":
			variant_classes =
				"bg-brand-button-dark hover:bg-brand-button text-white border-brand focus-visible:outline-brand shadow-sm";
			break;
		case "secondary":
			variant_classes =
				"bg-foreground text-background hover:text-line-stronger focus-visible:text-border-control border-foreground-light hover:border-foreground-lighter focus-visible:outline-line-strong shadow-sm";
			break;
		case "default":
			variant_classes =
				"text-foreground bg-btn hover:bg-selection border-btn-outline hover:border-btn-outline-hover focus-visible:outline-brand shadow-sm";
			break;
		case "outline":
			variant_classes =
				"text-foreground bg-transparent border-line-strong hover:border-line-stronger focus-visible:outline-line-strong";
			break;
		case "link":
			variant_classes =
				"text-brand-link border-transparent hover:underline bg-opacity-0 shadow-none focus-visible:outline-line-strong";
			break;
		case "text":
			variant_classes =
				"text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-line-strong border-transparent";
			break;
		case "danger":
			variant_classes =
				"text-white bg-destructive-400 border-destructive-500 hover:bg-destructive-300 hover:text-lo-contrast focus-visible:outline-destructive-500 shadow-sm";
			break;
		case "warning":
			variant_classes =
				"text-warning-600 bg-warning-400 border-warning-500 hover:bg-warning-300 hover:text-lo-contrast focus-visible:outline-warning-500 shadow-sm";
			break;
		case "avatar":
			variant_classes =
				"transition border-line text-foreground bg-btn hover:bg-selection border-btn-outline hover:border-btn-outline-hover focus-visible:outline-warning-500 shadow-sm";
			break;
		case "input":
			variant_classes =
				"h-9 justify-start border-line bg-transparent dark:bg-surface-200 text-foreground shadow-sm hover:border-line-strong focus-visible:outline-line-strong";
			break;
	}

	// Combine all classes
	const class_list = `${base_classes} ${size_classes} ${variant_classes}`;

	// If a class was provided in rest_props, merge it with our classes
	if (rest_props.class) {
		const user_class = rest_props.class;
		rest_props.class =
			typeof user_class === "function" ? () => `${class_list} ${user_class()}` : `${class_list} ${user_class}`;
	} else {
		rest_props.class = class_list;
	}

	// Create the button element with merged props and children
	return tags.button(
		{
			disabled,
			...rest_props,
		},
		...children,
	);
}
