import React from "react";
import PropTypes from "prop-types";
import "./Clock.css";

Clock.propTypes = {
	/** Additional sizes can be added in Clock.scss */
	size: PropTypes.oneOf(["tiny", "small", "regular", "large"]),
	config: PropTypes.shape({
		hour: PropTypes.number,
		minute: PropTypes.number,
		visible: PropTypes.bool,
	}),
};

/**
 * A nicer clock with clean animation.
 * You must provide the time to this clock - it doesn't change on its
 * @source https://codepen.io/dope/pen/KJYMZz
 * @param {string} size
 */
function Clock({
	size = "regular",
	config = { hour: 0, minute: 0, visible: true },
} = {}) {
	const { hour, minute, visible } = config;
	const hourHand = React.createRef(null);
	const minuteHand = React.createRef(null);

	/**
	 * This effect determines what angle to set the hour and minute hands
	 */
	React.useEffect(() => {
		if (isNaN(hour) || isNaN(minute)) return;
		if (!hourHand?.current || !minuteHand?.current) return;
		const hourInDegrees = hour * 30;
		const minuteInDegrees = minute * 6;
		hourHand.current.style.transform = `rotate(${hourInDegrees}deg)`;
		minuteHand.current.style.transform = `rotate(${minuteInDegrees}deg)`;
	}, [hourHand, minuteHand, hour, minute]);

	const clockClass = visible ? "wrap" : "wrap hidden";

	return (
		<div className={`clock ${size}`}>
			<div className={clockClass}>
				<span ref={hourHand} className="hour"></span>
				<span ref={minuteHand} className="minute"></span>
				<span className="dot"></span>
			</div>
		</div>
	);
}

export default Clock;
