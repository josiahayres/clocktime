import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

import Conditional from "components/Conditional/Conditional";
import Digit from "components/Digit/Digit";
import Radio from "components/Radio/Radio";
import RadioGroup from "components/Radio/RadioGroup";
import Toggle from "components/Toggle/Toggle";
import ColourSelect from "components/ColourSelect/ColourSelect";
import ColourSelectGroup from "components/ColourSelect/ColourSelectGroup";

import useUrlParamsLocalStorage from "hooks/useUrlParamsLocalStorage";
import Chevron from "./feather-chevron-right.svg";

import pkg from "../../package.json";

import "./Clock.css";

function Clock() {
	const { enqueueSnackbar } = useSnackbar();
	const [time, setTime] = useState(new Date());
	const [hour, setHour] = useState(0);
	const [hour2, setHour2] = useState(0);
	const [minute, setMinute] = useState(0);
	const [minute2, setMinute2] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [seconds2, setSeconds2] = useState(0);
	const [optionsVisible, setOptionsVisible] = useState(false);

	/** Options */

	const [showInfoAlert, setShowInfoAlert] = useUrlParamsLocalStorage(
		"showInfoAlert",
		true
	);
	const [is24hr, setIs24hr] = useUrlParamsLocalStorage("is24Hr", false);
	const [showSeconds, setShowSeconds] = useUrlParamsLocalStorage(
		"showSeconds",
		false
	);
	const [showDivider, setShowDivider] = useUrlParamsLocalStorage(
		"showDivider",
		true
	);
	const [clockSize, setClockSize] = useUrlParamsLocalStorage(
		"clockSize",
		"small"
	);
	const [backgroundOption, setBackgroundName] = useUrlParamsLocalStorage(
		"backgroundOption",
		"animatedBackgroundOne"
	);

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000);
		return () => {
			clearInterval(interval);
		};
	});

	useEffect(() => {
		// 12 hr time
		const timer =
			is24hr || time.getHours() <= 12
				? time.getHours()
				: time.getHours() % 12;
		const hourStr = timer.toString().padStart(2, "0");
		const minuteStr = time.getMinutes().toString().padStart(2, 0);
		const secondsStr = time.getSeconds().toString().padStart(2, 0);

		setHour(Number(hourStr[0]));
		setHour2(Number(hourStr[1]));
		setMinute(Number(minuteStr[0]));
		setMinute2(Number(minuteStr[1]));
		setSeconds(Number(secondsStr[0]));
		setSeconds2(Number(secondsStr[1]));
	}, [time, is24hr]);

	const closeOptions = () => {
		setOptionsVisible(false);
		if (!showInfoAlert) return;
		const message = "Your preferences are saved between browser reloads!";
		enqueueSnackbar(message, {
			variant: "info",
		});
		setShowInfoAlert(false);
	};

	const optionsOverlay = (
		<div className="overlay" onClick={() => closeOptions()}>
			<div
				className="optionsContainer"
				onClick={(e) => e.stopPropagation()}
			>
				<h2>Configure</h2>
				<div className="options">
					<h3>Display</h3>
					<Toggle
						label="Seconds"
						checked={showSeconds}
						onClick={() => setShowSeconds(!showSeconds)}
					/>
					<Toggle
						label="24 hours"
						checked={is24hr}
						onClick={() => setIs24hr(!is24hr)}
					/>
					<Toggle
						label="Divider"
						checked={showDivider}
						onClick={() => setShowDivider(!showDivider)}
					/>
					<h3>Clock size</h3>
					<RadioGroup>
						<Radio
							value="tiny"
							name="clockSize"
							onClick={setClockSize}
							selected={clockSize}
						/>
						<Radio
							value="small"
							name="clockSize"
							onClick={setClockSize}
							selected={clockSize}
						/>
						<Radio
							value="regular"
							name="clockSize"
							onClick={(size) => setClockSize(size)}
							selected={clockSize}
						/>
						<Radio
							value="large"
							name="clockSize"
							onClick={(size) => setClockSize(size)}
							selected={clockSize}
						/>
					</RadioGroup>
					<h3>Background</h3>
					<ColourSelectGroup>
						<ColourSelect
							value="animatedBackgroundOne"
							selected={backgroundOption}
							onClick={(backgroundName) =>
								setBackgroundName(backgroundName)
							}
						/>
						<ColourSelect
							value="animatedBackgroundTwo"
							selected={backgroundOption}
							onClick={(backgroundName) =>
								setBackgroundName(backgroundName)
							}
						/>

						<ColourSelect
							value="animatedBackgroundThree"
							selected={backgroundOption}
							onClick={(backgroundName) =>
								setBackgroundName(backgroundName)
							}
						/>
					</ColourSelectGroup>
					{/* <button
						onClick={() => {
							window.localStorage.clear();
							window.history.pushState(
								"",
								"Clocktime",
								window.location.pathname
							);
						}}
					>
						Reset to default
					</button> */}
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Conditional when={optionsVisible}>{optionsOverlay}</Conditional>
			<div className={`app ${backgroundOption}`}>
				<div className="time">
					<Digit number={hour} size={clockSize} />
					<Digit number={hour2} size={clockSize} />
				</div>
				<Conditional when={showDivider}>
					<div className="divider">:</div>
				</Conditional>
				<div className="time">
					<Digit number={minute} size={clockSize} />
					<Digit number={minute2} size={clockSize} />
				</div>
				<Conditional when={showSeconds}>
					<Conditional when={showDivider}>
						<div className="divider">:</div>
					</Conditional>
					<div className="time">
						<Digit number={seconds} size={clockSize} />
						<Digit number={seconds2} size={clockSize} />
					</div>
				</Conditional>
				<span>
					<span
						className="optionsBtn"
						onClick={() => setOptionsVisible(true)}
					>
						options
					</span>
					{` | ${pkg.name} (${pkg.version})`}
				</span>
			</div>
		</>
	);
}

export default Clock;
