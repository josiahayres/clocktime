import React from "react";
import PropTypes from "prop-types";
import Clock from "../AnalogClock/Clock";
import "./Digit.css";

Digit.propTypes = {
	number: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
	size: PropTypes.oneOf(["tiny", "small", "regular", "large"]),
};

/**
 * This component displays a number - using 6 AnalogClocks.
 * If no number is provided - will default to 0
 */
function Digit({ number, size = "small" } = {}) {
	let digit;
	switch (number) {
		case 1:
			digit = {
				topLeft: { hour: 0, minute: 30, visible: false },
				topRight: { hour: 6, minute: 30, visible: true },
				middleLeft: { hour: 6, minute: 15, visible: false },
				middleRight: { hour: 6, minute: 60, visible: true },
				bottomLeft: { hour: 3, minute: 60, visible: false },
				bottomRight: { hour: 12, minute: 60, visible: true },
			};
			break;
		case 2:
			digit = {
				topLeft: { hour: 3, minute: 15, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 6, minute: 15, visible: true },
				middleRight: { hour: 12, minute: 45, visible: true },
				bottomLeft: { hour: 3, minute: 60, visible: true },
				bottomRight: { hour: 9, minute: 45, visible: true },
			};
			break;
		case 3:
			digit = {
				topLeft: { hour: 3, minute: 15, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 3, minute: 15, visible: true },
				middleRight: { hour: 12, minute: 45, visible: true },
				bottomLeft: { hour: 3, minute: 15, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
		case 4:
			digit = {
				topLeft: { hour: 6, minute: 30, visible: true },
				topRight: { hour: 6, minute: 30, visible: true },
				middleLeft: { hour: 12, minute: 15, visible: true },
				middleRight: { hour: 12, minute: 45, visible: true },
				bottomLeft: { hour: 3, minute: 15, visible: false },
				bottomRight: { hour: 12, minute: 60, visible: true },
			};
			break;
		case 5:
			digit = {
				topLeft: { hour: 6, minute: 15, visible: true },
				topRight: { hour: 9, minute: 45, visible: true },
				middleLeft: { hour: 12, minute: 15, visible: true },
				middleRight: { hour: 6, minute: 45, visible: true },
				bottomLeft: { hour: 3, minute: 15, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
		case 6:
			digit = {
				topLeft: { hour: 6, minute: 15, visible: true },
				topRight: { hour: 9, minute: 45, visible: true },
				middleLeft: { hour: 12, minute: 30, visible: true },
				middleRight: { hour: 6, minute: 45, visible: true },
				bottomLeft: { hour: 12, minute: 15, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
		case 7:
			digit = {
				topLeft: { hour: 3, minute: 15, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 12, minute: 30, visible: false },
				middleRight: { hour: 12, minute: 30, visible: true },
				bottomLeft: { hour: 12, minute: 15, visible: false },
				bottomRight: { hour: 12, minute: 60, visible: true },
			};
			break;
		case 8:
			digit = {
				topLeft: { hour: 3, minute: 30, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 3, minute: 30, visible: true },
				middleRight: { hour: 9, minute: 30, visible: true },
				bottomLeft: { hour: 3, minute: 60, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
		case 9:
			digit = {
				topLeft: { hour: 3, minute: 30, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 3, minute: 0, visible: true },
				middleRight: { hour: 12, minute: 30, visible: true },
				bottomLeft: { hour: 3, minute: 15, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
		default:
			digit = {
				topLeft: { hour: 3, minute: 30, visible: true },
				topRight: { hour: 9, minute: 30, visible: true },
				middleLeft: { hour: 12, minute: 30, visible: true },
				middleRight: { hour: 12, minute: 30, visible: true },
				bottomLeft: { hour: 12, minute: 15, visible: true },
				bottomRight: { hour: 9, minute: 0, visible: true },
			};
			break;
	}

	return (
		<div className="analog-digit">
			<Clock config={digit.topLeft} size={size} />
			<Clock config={digit.topRight} size={size} />
			<Clock config={digit.middleLeft} size={size} />
			<Clock config={digit.middleRight} size={size} />
			<Clock config={digit.bottomLeft} size={size} />
			<Clock config={digit.bottomRight} size={size} />
		</div>
	);
}

export default Digit;
