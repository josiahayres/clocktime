import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

test("click", () => {
	let clockSize = "tiny";
	const handleChange = jest.fn((newId) => (clockSize = newId));

	render(
		<RadioGroup>
			<label htmlFor="checkbox">Check</label>
			<Radio
				value="tiny"
				name="clocksize"
				onClick={handleChange}
				selected={clockSize}
			/>
			<Radio
				value="small"
				name="clocksize"
				onClick={handleChange}
				selected={clockSize}
			/>
		</RadioGroup>
	);

	expect(screen.getAllByRole("radio")).toHaveLength(2);
	expect(screen.getAllByRole("radio")[0]).toHaveAttribute("checked", "");
	expect(screen.getAllByRole("radio")[1]).not.toHaveAttribute("checked", "");
	userEvent.click(screen.getByLabelText("small"));
	expect(handleChange.mock.calls.length).toBe(1);
	expect(clockSize).toBe("small");
});
