import React, { useState, useEffect } from 'react';
import Digit from './components/Digit/Digit';
import useLocalStorage from "./hooks/useLocalStorage";
import Conditional from './components/Conditional/Conditional';
import Toggle from "./components/Toggle/Toggle";
import Radio from "./components/Radio/Radio";
import RadioGroup from "./components/Radio/RadioGroup";
import { useSnackbar } from 'notistack';


import pkg from '../package.json';

import './App.css';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const [time, setTime] = useState(new Date());
  const [hour, setHour] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [minute, setMinute] = useState(0);
  const [minute2, setMinute2] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [optionsVisible, setOptionsVisible] = useState(true);

  /** Options */
  const [is24hr, setIs24hr] = useLocalStorage("is24Hr", false);
  const [showSeconds, setShowSeconds] = useLocalStorage("showSeconds", false);
  const [showDivider, setShowDivider] = useLocalStorage("showDivider", true);
  const [clockSize, setClockSize] = useLocalStorage("clockSize", "small");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  });

  useEffect(() => {
    // 12 hr time
    const timer = (is24hr || time.getHours() <= 12) ? time.getHours() : time.getHours() % 12;
    const hourStr = (timer).toString().padStart(2, "0");
    const minuteStr = (time.getMinutes().toString().padStart(2, 0));
    const secondsStr = (time.getSeconds().toString().padStart(2, 0));

    setHour(Number(hourStr[0]));
    setHour2(Number(hourStr[1]));
    setMinute(Number(minuteStr[0]));
    setMinute2(Number(minuteStr[1]));
    setSeconds(Number(secondsStr[0]));
    setSeconds2(Number(secondsStr[1]));
  }, [time, is24hr]);

  const closeOptions = () => {
    setOptionsVisible(false);
    const message = "Your preferences are now saved between browser reloads!";
    enqueueSnackbar(message, {
      variant: 'info',
    });
  }
  const optionsOverlay = <div className="overlay" >
    <div className="optionsContainer" onClick={(e) => e.stopPropagation()}>
      <h2>Clocktime</h2>
      <div className="options">
        <h3>Options</h3>
        <Toggle
          label="Seconds"
          checked={showSeconds}
          onClick={() => setShowSeconds(!showSeconds)} />
        <Toggle
          label="24 hours"
          checked={is24hr}
          onClick={() => setIs24hr(!is24hr)} />
        <Toggle
          label="Divider"
          checked={showDivider}
          onClick={() => setShowDivider(!showDivider)} />
        <p>Clock size</p>
        <RadioGroup>
          <Radio size="tiny" name="clocksize" onClick={(size) => setClockSize(size)} selected={clockSize} />
          <Radio size="small" name="clocksize" onClick={(size) => setClockSize(size)} selected={clockSize} />
          <Radio size="regular" name="clocksize" onClick={(size) => setClockSize(size)} selected={clockSize} />
          <Radio size="large" name="clocksize" onClick={(size) => setClockSize(size)} selected={clockSize} />
        </RadioGroup>

        <h3>Background</h3>
        <p>Coming soon...</p>
      </div>
      <button className="closeButton" onClick={() => closeOptions()}>Close</button>
    </div>
  </div >;

  return (
    <>
      <Conditional when={optionsVisible}>
        {optionsOverlay}
      </Conditional>
      <div className="app">
        <div className="time">
          <Digit number={hour} size={clockSize} />
          <Digit number={hour2} size={clockSize} />
        </div>
        <Conditional when={showDivider}><div className="divider">:</div></Conditional>
        <div className="time">
          <Digit number={minute} size={clockSize} />
          <Digit number={minute2} size={clockSize} />
        </div>
        <Conditional when={showSeconds}>
          <Conditional when={showDivider}><div className="divider">:</div></Conditional>
          <div className="time">
            <Digit number={seconds} size={clockSize} />
            <Digit number={seconds2} size={clockSize} />
          </div>
        </Conditional>
        <span><span className="optionsBtn" onClick={() => setOptionsVisible(true)}>options</span>  | {`${pkg.name} (${pkg.version})`}</span>
      </div>
    </>
  );
}

export default App;
