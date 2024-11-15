// eslint.config.mjs
import {defineConfig} from 'eslint-define-config';
import xoTypeScript from 'eslint-config-xo-typescript';

export default defineConfig({
	env: {
		node: true,
		es2021: true,
	},
	ignores: ['node_modules/**', 'dist/**'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
		'no-console': 'warn',
	},
	...xoTypeScript,
});
