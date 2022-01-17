import App from "./App.svelte";
import { skill_data } from "./data/skilldata";
import { over_strength_values } from "./data/parkdata";

const app = new App({
	target: document.body,
	props: {
		skill_data,
		over_strength_values,
		darkMode: localStorage.getItem("dark_mode") == "true",
	},
});

export function applyTheme() {
	const darkMode = localStorage.getItem("dark_mode") == "true";

	//Apply theme attribute
	if (darkMode) {
		document.documentElement.setAttribute("theme", "dark");
	} else {
		document.documentElement.removeAttribute("theme");
	}
}

export default app;
