import React from "react";
import PropTypes from "prop-types";
import "pages/Clock.css";
import "./ColourSelect.css";

const ColourSelect = ({
	onClick = (size) => {
		console.log("ColourSelect component missing onClick");
	},
	value = "",
	selected = "",
	hoverText,
} = {}) => {
	return (
		<li
			id={value}
			onClick={() => onClick(value)}
			aria-label={hoverText}
			className={value}
		>
			<input
				type="radio"
				name="backgroundColour"
				value={value}
				checked={selected === value}
			/>
			<div className="check"></div>
		</li>
	);
};

ColourSelect.propTypes = {
	/** Called when ColourSelect option is clicked. Provides value as parameter */
	onClick: PropTypes.func.isRequired,
	/** Value of the checkbox */
	value: PropTypes.string.isRequired,
	/** If selected is same as value, then ColourSelect option will be marked checked */
	selected: PropTypes.string.isRequired,
	/** If present, used as ColourSelect option label. Label set to value if not present.  */
	hoverText: PropTypes.string,
};

export default ColourSelect;
