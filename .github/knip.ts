import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["build/index.ts"],
  project: ["src/**/*.ts"],
  ignore: ["**/__mocks__/**", "**/__fixtures__/**", "src/types/database.ts", "dist/**"],
  ignoreExportsUsedInFile: true,
  // eslint can also be safely ignored as per the docs: https://knip.dev/guides/handling-issues#eslint--jest
  ignoreDependencies: ["eslint-config-prettier", "eslint-plugin-prettier", "@typescript-eslint/eslint-plugin", "@typescript-eslint/parser", "ts-node"],
  eslint: true,
};

export default config;
