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

	propsParser(filePath, source, resolver, handlers) {
		// console.log(filePath, source, resolver, handlers);
		const customHandler = (documentation, definition, parser) => {
			try {
				// console.log("customHandler() for ", filePath);
				// console.log(
				// 	"customHandler() - component has props: ",
				// 	documentation._props
				// );
				// _props is a map so we can .get and .set

				// console.log(
				// 	"customHandler() definition",
				// 	Object.keys(definition),
				// 	definition.__childCache.body.parentPath.value.params[0].loc
				// );
				const {
					start,
					end,
				} = definition.__childCache.body.parentPath.value.params[0].loc;
				// console.log(Object.keys(definition.value));
				// console.log(
				// 	"customHandler() definition - start,end",
				// 	start,
				// 	end
				// );
				const sourceRows = source.split(/\n/);
				const destructuredProps = sourceRows[start.line - 1].slice(
					start.column,
					end.column
				);
				// console.log("destructuredProps", destructuredProps);
				const noDefaultAssign = destructuredProps.replace("= {}", "");
				// console.log("noDefaultAssign", noDefaultAssign);
				const asObjStr = noDefaultAssign.replace(/=/g, ":");
				// console.log("asObjStr", asObjStr);
				const propsObject = JSON.parse(
					asObjStr.replace(/(\{|,)\s*(.+?)\s*:/g, '$1 "$2":')
				);
				// console.log(propsObject);

				// # Set the default props

				// Get the existing info about this prop
				for (const [key, value] of documentation._props.entries()) {
					// Save the default information from the propsObject, with the existing info
					documentation._props.set(key, {
						...value,
						defaultValue: {
							value: propsObject[key],
							computed: false,
						},
					});
				}
			} catch (error) {
				console.log("Failed to enrich default value for:", filePath);
			}
		};
		const props = require("react-docgen").parse(source, resolver, [
			...handlers,
			customHandler,
		]);
		return props;
	},

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
