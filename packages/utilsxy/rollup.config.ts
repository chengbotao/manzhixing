/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import pkg from "./package.json" assert { type: "json" };

import type { RollupOptions } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";

const { name, version, author } = pkg;
const outputConf = {
	banner: `/* ${name} version ${version} */`,
	footer: `/* Follow me on GitHub! @${author} */`,
};
const config: RollupOptions = {
	input: "src/index.ts",
	output: [
		{
			file: "dist/index.esm.js",
			format: "esm",
			...outputConf,
		},
		{
			file: "dist/index.umd.js",
			format: "umd",
			name: "vuexPersistedPlugin",
			...outputConf,
		},
	],
	plugins: [commonjs(), typescript()],
};

const _dts: RollupOptions = {
	input: "src/index.ts",
	output: {
		file: "types/index.d.ts",
		format: "esm",
	},
	plugins: [dts()],
};
export default [config, _dts];
