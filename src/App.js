import React, { useState, useEffect } from 'react';
import Digit from './components/Digit/Digit';
import Conditional from './components/Conditional/Conditional';
import Toggle from "./components/Toggle/Toggle";
import pkg from '../package.json';

import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [hour, setHour] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [minute, setMinute] = useState(0);
  const [minute2, setMinute2] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);

  const [optionsVisible, setOptionsVisible] = useState(false);

  /** Options */
  const [is24hr, setIs24hr] = useState(false);
  const [showSeconds, setShowSeconds] = useState(false);
  const [showDivider, setShowDivider] = useState(true);

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
        <h3>Background</h3>
        <p>Coming soon...</p>
        <h3>Save preferences</h3>
        <p>Coming soon...</p>
      </div>
      <button className="closeButton" onClick={() => setOptionsVisible(false)}>Close</button>
    </div>
  </div>;

  return (
    <>
      <Conditional when={optionsVisible}>
        {optionsOverlay}
      </Conditional>
      <div className="app">
        <div className="time">
          <Digit number={hour} />
          <Digit number={hour2} />
        </div>
        <Conditional when={showDivider}><div className="divider">:</div></Conditional>
        <div className="time">
          <Digit number={minute} />
          <Digit number={minute2} />
        </div>
        <Conditional when={showSeconds}>
          <Conditional when={showDivider}><div className="divider">:</div></Conditional>
          <div className="time">
            <Digit number={seconds} />
            <Digit number={seconds2} />
          </div>
        </Conditional>
        <span><span className="optionsBtn" onClick={() => setOptionsVisible(true)}>options</span>  | {`${pkg.name} (${pkg.version})`}</span>
      </div>
    </>
  );
}

export default App;
