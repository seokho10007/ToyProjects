const CracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				tsConfigPath: 'tsconfig.extend.json',
			},
		},
	],
	babel: {
		presets: ['@emotion/babel-preset-css-prop'],
	},
};
