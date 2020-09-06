import React from "react";
import "components/Radio/RadioGroup.css";
import "./ColourSelectGroup.css";

function ColourSelectGroup({ children } = {}) {
	return (
		<div className="colourSelectGroup">
			<ul>{children}</ul>
		</div>
	);
}

export default ColourSelectGroup;
