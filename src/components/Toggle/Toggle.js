import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

const Toggle = ({ onClick, label = "", checked = false } = {}) => {
	return (
		<div className="toggleContainer">
			<p>{label}</p>
			<label className="switch">
				<input type="checkbox" checked={checked} onChange={onClick} />
				<span className="slider round"></span>
			</label>
		</div>
	);
};

Toggle.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
	checked: PropTypes.bool,
};

export default Toggle;
