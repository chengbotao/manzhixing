/*
 * @Author: Chengbotao
 * @Date: 2023-12-18 11:35:18
 */
import { resolve } from 'path';
import pkg from './package.json';

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const { version } = pkg;
const outputConf = {
  banner: `/* utilsxy version ${version} */`,
  footer: `/* Follow me on GitHub! @chengbotao */`,
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: resolve(__dirname, 'dist', 'utilsxy.esm.js'),
      format: 'esm',
      ...outputConf,
    },
    {
      file: resolve(__dirname, 'dist', 'utilsxy.js'),
      format: 'umd',
      name: 'utilsxy',
      ...outputConf,
    },
  ],
  plugins: [
    alias({
      entries: {
        packages: resolve(__dirname, 'packages'),
      },
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', 'tsx'],
    }),
    typescript(),
    json(),
  ],
};
