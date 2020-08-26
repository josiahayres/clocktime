const path = require("path");
const fs = require("fs");
const pkg = require("./package.json");

module.exports = {
	title: "REACT STARTER APP Style Guide",
	version: `Version ${pkg.version}`,
	assetsDir: "public",
	styleguideDir: "build/styleguide",
	pagePerSection: true,
	defaultExample: false,
	skipComponentsWithoutExample: true,
	sections: [
		{
			name: "Introduction",
			content: "docs/Introduction.md",
		},

		{
			name: "UI Components",
			components: "src/components/**/*.{js,jsx,ts,tsx}",
			exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
			usageMode: "expand", // 'hide' | 'collapse' | 'expand'
		},
	],

	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, ".js");
		const dir = path.dirname(componentPath).replace(/src\//, "");
		return `import ${name} from '${dir}/${name}';`;
	},
	getExampleFilename(componentPath) {
		return componentPath.replace(/\.jsx?$/, ".md");
	},
	template: {
		head: {
			links: [
				{
					rel: "stylesheet",
					href:
						"https://fonts.googleapis.com/css?family=IBM+Plex+Mono&family=IBM+Plex+Sans",
				},
			],
		},
	},
	theme: {
		fontFamily: {
			base: [
				'"IBM Plex Sans", sans-serif',
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				'"Roboto"',
				'"Oxygen"',
				'"Ubuntu"',
				'"Cantarell"',
				'"Fira Sans"',
				'"Droid Sans"',
				'"Helvetica Neue"',
				"sans-serif",
			],
			monospace: [
				"IBM Plex Mono",
				"Consolas",
				'"Liberation Mono"',
				"Menlo",
				"monospace",
			],
		},
	},
};
