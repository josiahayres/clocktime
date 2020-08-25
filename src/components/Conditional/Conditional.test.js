import React from "react";
import { render } from "@testing-library/react";
import chalk from "chalk";
import checkPropTypes from "check-prop-types";

import Conditional from "./Conditional";

test("conditional gives proptype warning when no props provided", () => {
	let result = checkPropTypes(
		Conditional.propTypes,
		{},
		"prop",
		Conditional.name
	);
	expect(result).toBe(
		"Failed prop type: The prop `when` is marked as required in `Conditional`, but its value is `undefined`."
	);
});

test("conditional passes proptype warning when correct props provided", () => {
	let result = checkPropTypes(
		Conditional.propTypes,
		{ when: true },
		"prop",
		Conditional.name
	);
	expect(result).toBe(undefined);
});

// test("conditional renders when true", () => {
// 	const { getByText } = render(
// 		<Conditional when={true}>test content</Conditional>
// 	);
// 	const linkElement = getByText("test content");
// 	expect(linkElement).toBeInTheDocument();
// });
