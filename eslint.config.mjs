import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'


export default [
	{
		languageOptions: { globals: globals.node },
		rules: {
			quotes: ['error', 'single'],
			semi: ['error','never'],
			indent: ['error', 'tab']
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
]