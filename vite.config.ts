import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
	// The env variables are driven by the --mode command passed to vite.
	const { OUTDIR } = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		test: {
			globals: true,
			environment: "jsdom",
			setupFiles: "./setupTests.js",
		},
		build: {
			rollupOptions: {
				output: {
					dir: OUTDIR || "dist",
					entryFileNames: "comparables-mfe.[hash].js",
					chunkFileNames: "[name].[hash].js",
				},
			},
		},
	};
});
