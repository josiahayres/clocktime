import React from "react";
import PropTypes from "prop-types";
import "./Radio.css";

const Radio = ({
	onClick = (size) => {
		console.log("Radio component missing onClick");
	},
	value = "",
	selected = "",
	label,
} = {}) => {
	return (
		<li id={value} onClick={() => onClick(value)}>
			<input
				type="radio"
				name="clocksize"
				value={value}
				checked={selected === value}
				onChange={() => onClick(value)}
			/>
			<label htmlFor={value}>{label ?? value}</label>
			<div className="check">
				<div className="inside"></div>
			</div>
		</li>
	);
};

Radio.propTypes = {
	/** Called when radio option is clicked. Provides value as parameter */
	onClick: PropTypes.func.isRequired,
	/** Value of the checkbox */
	value: PropTypes.string.isRequired,
	/** If selected is same as value, then radio option will be marked checked */
	selected: PropTypes.string.isRequired,
	/** If present, used as radio option label. Label set to value if not present.  */
	label: PropTypes.string,
};

export default Radio;
