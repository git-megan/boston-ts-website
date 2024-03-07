import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";

installGlobals();

export default defineConfig({
	plugins: [
		remix({
			presets: [vercelPreset()],
		}),
	],
});
