import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the options link and version", () => {
	const { getByText } = render(<App />);
	const optionsButton = getByText("options");
	expect(optionsButton).toBeInTheDocument();

	const versionText = getByText(/clocktime \([0-9]+.[0-9]+.[0-9]+\)/);
	expect(versionText).toBeInTheDocument();
});
