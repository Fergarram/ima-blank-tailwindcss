import { tags } from "@/lib/ima";
import { Button } from "@/ui/button";
const { main, h1, p } = tags;

let count = 0;

// Mount App
const app = main(
	{
		class: "flex flex-col items-center justify-center h-screen",
	},
	h1("IMA BLANK"),
	p("Pure vanilla template."),
	Button(
		{
			onClick: () => count++,
		},
		() => `Add ${count} clicks`,
	),
);

document.body.appendChild(app);
