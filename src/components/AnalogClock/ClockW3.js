import React from "react";
import "./ClockW3.css";

/**
 *
 * Component is based off the w3schools canvas clock, converted to React.
 * https://www.w3schools.com/graphics/canvas_clock_start.asp
 * @param {*} props
 */
function ClockW3(props) {
	const {
		id,
		width = 300,
		height = 300,
		staticClock = false,
		hour = 0,
		minute = 0,
	} = props;
	const canvas = React.createRef(null);

	const [time, setTime] = React.useState(Date.now());
	const [ctx, setCtx] = React.useState(canvas?.current?.getContext("2d"));
	const [radius, setRadius] = React.useState(height / 2);
	const [setupComplete, setSetupComplete] = React.useState(false);

	// setCtx()
	React.useEffect(() => {
		if (staticClock) return;
		const interval = setInterval(() => setTime(Date.now()), 1000);
		return () => {
			clearInterval(interval);
		};
	});

	React.useEffect(() => {
		if (!!ctx && !setupComplete) {
			ctx.translate(radius, radius);
			setRadius(radius * 0.9);
			setSetupComplete(true);
		} else {
			setCtx(canvas?.current?.getContext("2d"));
		}
	}, [ctx, canvas, radius, setupComplete]);

	React.useEffect(() => {
		if (!!ctx && !!radius && setupComplete) {
			function drawFace(ctx, radius) {
				var grad;
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, 2 * Math.PI);
				ctx.fillStyle = "white";
				ctx.fill();
				grad = ctx.createRadialGradient(
					0,
					0,
					radius * 0.95,
					0,
					0,
					radius * 1.05
				);
				grad.addColorStop(0, "#333");
				grad.addColorStop(0.5, "white");
				grad.addColorStop(1, "#333");
				ctx.strokeStyle = grad;
				ctx.lineWidth = radius * 0.1;
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
				ctx.fillStyle = "#333";
				ctx.fill();
			}

			function drawNumbers(ctx, radius) {
				var ang;
				var num;
				ctx.font = radius * 0.15 + "px arial";
				ctx.textBaseline = "middle";
				ctx.textAlign = "center";
				for (num = 1; num < 13; num++) {
					ang = (num * Math.PI) / 6;
					ctx.rotate(ang);
					ctx.translate(0, -radius * 0.85);
					ctx.rotate(-ang);
					ctx.fillText("." || num.toString(), 0, 0);
					ctx.rotate(ang);
					ctx.translate(0, radius * 0.85);
					ctx.rotate(-ang);
				}
			}

			function drawTime(ctx, radius, h, m) {
				if (staticClock) {
					var hour = h;
					var minute = m;
					var second = 0;
					//hour
					hour = hour % 12;
					hour =
						(hour * Math.PI) / 6 +
						(minute * Math.PI) / (6 * 60) +
						(second * Math.PI) / (360 * 60);
					drawHand(ctx, hour, radius * 0.5, radius * 0.07);
					//minute
					minute =
						(minute * Math.PI) / 30 +
						(second * Math.PI) / (30 * 60);
					drawHand(ctx, minute, radius * 0.8, radius * 0.07);
				} else {
					let now = new Date();
					let hour = now.getHours();
					let minute = now.getMinutes();
					let second = now.getSeconds();
					//hour
					hour = hour % 12;
					hour =
						(hour * Math.PI) / 6 +
						(minute * Math.PI) / (6 * 60) +
						(second * Math.PI) / (360 * 60);
					drawHand(ctx, hour, radius * 0.5, radius * 0.07);
					//minute
					minute =
						(minute * Math.PI) / 30 +
						(second * Math.PI) / (30 * 60);
					drawHand(ctx, minute, radius * 0.8, radius * 0.07);
					// second
					second = (second * Math.PI) / 30;
					drawHand(ctx, second, radius * 0.9, radius * 0.02);
				}
			}

			function drawHand(ctx, pos, length, width) {
				ctx.beginPath();
				ctx.lineWidth = width;
				ctx.lineCap = "round";
				ctx.moveTo(0, 0);
				ctx.rotate(pos);
				ctx.lineTo(0, -length);
				ctx.stroke();
				ctx.rotate(-pos);
			}

			drawFace(ctx, radius);
			drawNumbers(ctx, radius);
			drawTime(ctx, radius, hour, minute);
		}
	}, [ctx, time, radius, setupComplete, hour, minute, staticClock]);

	return (
		<canvas
			ref={canvas}
			id={id}
			width={width}
			height={height}
			className="clock"
		></canvas>
	);
}

export default ClockW3;
