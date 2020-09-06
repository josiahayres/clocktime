import React from "react";
import "./RadioGroup.css";

const RadioGroup = (props) => {
	const { children } = props;
	return (
		<div className="radioContainer">
			<ul>{children}</ul>
		</div>
	);
};

export default RadioGroup;
