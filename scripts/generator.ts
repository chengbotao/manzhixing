/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { writeFileSync, appendFileSync, ensureDirSync } from 'fs-extra';
import { join, dirname } from 'path';
const PROCESS_ARGS = process.argv.slice(2);
const UTILSXY_FN_NAME = PROCESS_ARGS[1];
const UTILSXY_SRC_PATH = join(__dirname, '..', 'packages/utilsxy/src');
const UTILSXY_SRC_TEMPLATE_FILES = {
  'index.ts': `export function ${UTILSXY_FN_NAME}() {\n  return;\n}\n`,
  'README.md': `# ${UTILSXY_FN_NAME}

## 参数

| 参数名    | 参数类型     | 参数说明  |
| --------- | ---------| --------- |
||||

## 源代码&使用

::: code-group

\`\`\`ts [使用]
\`\`\`

<<< @/src/${UTILSXY_FN_NAME}/index.ts [源代码: ${UTILSXY_FN_NAME}]

:::
`,
  [`${UTILSXY_FN_NAME}.test.ts`]: `import { ${UTILSXY_FN_NAME} } from './index';\n`,
};

appendFileSync(
  `${UTILSXY_SRC_PATH}/index.ts`,
  `export { ${UTILSXY_FN_NAME} } from './${UTILSXY_FN_NAME}';\n`
);

for (const [key, value] of Object.entries(UTILSXY_SRC_TEMPLATE_FILES)) {
  const FILE_PATH = `${UTILSXY_SRC_PATH}/${UTILSXY_FN_NAME}/${key}`;
  ensureDirSync(dirname(FILE_PATH));
  writeFileSync(FILE_PATH, value);
}
