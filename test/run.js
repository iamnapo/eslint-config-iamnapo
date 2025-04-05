import { rm, writeFile } from "node:fs/promises";
import process from "node:process";
import { run } from "node:test";
import { spec } from "node:test/reporters";
import { fileURLToPath } from "node:url";

await writeFile(
	new URL("tsconfig.json", import.meta.url),
	JSON.stringify({
		files: [
			fileURLToPath(new URL("typescript.test.ts", import.meta.url)),
			fileURLToPath(new URL("react-typescript.test.tsx", import.meta.url)),
		],
	}),
);

process.once("beforeExit", () => rm(new URL("tsconfig.json", import.meta.url)));

run({ globPatterns: ["test/*.test.js"], concurrency: true })
	.on("test:fail", () => {
		process.exitCode = 1;
	})
	.compose(spec)
	.pipe(process.stdout);
