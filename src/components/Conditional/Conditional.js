import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Conditional({ when = true, children = null } = {}) {
	return typeof when === "boolean" && !!when ? (
		children
	) : (
		<Fragment></Fragment>
	);
}

Conditional.propTypes = {
	/**
	 * When true, renders the children
	 * @default true
	 */
	when: PropTypes.bool.isRequired,
};

export default Conditional;
