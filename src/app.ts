import { tags } from "@/lib/ima";
import { addGlobalStyles, css, finish } from "@/lib/utils";

// Add App Styles
addGlobalStyles(css`
	html {
		color: black;
		background-color: white;
	}

	main {
		display: flex;
		gap: var(--size-2);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: var(--size-64);
	}
`);

const { main, h1, p, button } = tags;

let count = 0;

// Mount App
const app = main(
	h1("IMA BLANK"),
	p("Pure vanilla template."),
	button(
		{
			variant: "default",
			onClick: () => count++,
		},
		() => `Add ${count} clicks`,
	),
);

document.body.appendChild(app);
