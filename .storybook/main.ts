import path from 'path';

const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
	webpackFinal: async (config: any) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/'),
		};
		return config;
	},
};
export default config;
