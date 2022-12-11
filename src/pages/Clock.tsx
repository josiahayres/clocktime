import { createSignal, onCleanup, Show } from "solid-js";
import { Fade, Slide } from "@suid/material";

import { Digit } from "../components/Digit";
import { Radio, RadioGroup } from "../components/Radio";
import { Toggle } from "../components/Toggle";
import { ColourSelect, ColourSelectGroup } from "../components/ColourSelect";

import pkg from "../../package.json";

import "./Clock.css";
import { createUrlParamSignal } from "../hooks/createUrlParamSignal";

export function Clock() {
  const [hour, setHour] = createSignal(0);
  const [hour2, setHour2] = createSignal(0);
  const [minute, setMinute] = createSignal(0);
  const [minute2, setMinute2] = createSignal(0);
  const [seconds, setSeconds] = createSignal(0);
  const [seconds2, setSeconds2] = createSignal(0);
  const [optionsVisible, setOptionsVisible] = createSignal(false);

  /** Options */

  const [showInfoAlert, setShowInfoAlert] = createUrlParamSignal(
    "showInfoAlert",
    true
  );
  const [is24hr, setIs24hr] = createUrlParamSignal("is24Hr", false);
  const [showSeconds, setShowSeconds] = createUrlParamSignal(
    "showSeconds",
    false
  );
  const [showDivider, setShowDivider] = createUrlParamSignal(
    "showDivider",
    true
  );
  const [clockSize, setClockSize] = createUrlParamSignal("clockSize", "small");
  const [backgroundOption, setBackgroundName] = createUrlParamSignal(
    "backgroundOption",
    "animatedBackgroundOne"
  );

  const timer = setInterval(() => {
    const currentTime = new Date();
    const timer =
      is24hr() || currentTime.getHours() <= 12
        ? currentTime.getHours()
        : currentTime.getHours() % 12;
    const hourStr = timer.toString().padStart(2, "0");
    const minuteStr = currentTime.getMinutes().toString().padStart(2, "0");
    const secondsStr = currentTime.getSeconds().toString().padStart(2, "0");
    console.log("setting new times", hourStr, minuteStr, secondsStr);
    setHour(Number(hourStr[0]));
    setHour2(Number(hourStr[1]));
    const min = Number(minuteStr[0]);
    const min2 = Number(minuteStr[1]);
    console.log("setting min", min, typeof min);
    console.log("setting min2", min2, typeof min2);
    setMinute(min);
    setMinute2(min2);
    setSeconds(Number(secondsStr[0]));
    setSeconds2(Number(secondsStr[1]));
  }, 1000);

  onCleanup(() => clearInterval(timer));

  const closeOptions = () => {
    setOptionsVisible(false);
    if (!showInfoAlert()) return;
    const message = "Your preferences are saved between browser reloads!";
    alert(message);
    setShowInfoAlert(false);
  };

  const optionsOverlay = (
    <div class="optionsContainer" onClick={(e) => e.stopPropagation()}>
      <h2>Configure</h2>
      <div class="options">
        <h3>Display</h3>
        <Toggle
          label="Seconds"
          checked={showSeconds()}
          onClick={() => setShowSeconds(!showSeconds())}
        />
        <Toggle
          label="24 hours"
          checked={is24hr()}
          onClick={() => setIs24hr(!is24hr())}
        />
        <Toggle
          label="Divider"
          checked={showDivider()}
          onClick={() => setShowDivider(!showDivider())}
        />
        <h3>Clock size</h3>
        <RadioGroup>
          <Radio value="tiny" onClick={setClockSize} selected={clockSize()} />
          <Radio value="small" onClick={setClockSize} selected={clockSize()} />
          <Radio
            value="regular"
            onClick={(size) => setClockSize(size)}
            selected={clockSize()}
          />
          <Radio
            value="large"
            onClick={(size) => setClockSize(size)}
            selected={clockSize()}
          />
        </RadioGroup>
        <h3>Background</h3>
        <ColourSelectGroup>
          <ColourSelect
            value="animatedBackgroundOne"
            selected={backgroundOption()}
            onClick={(backgroundName) => setBackgroundName(backgroundName)}
          />
          <ColourSelect
            value="animatedBackgroundTwo"
            selected={backgroundOption()}
            onClick={(backgroundName) => setBackgroundName(backgroundName)}
          />

          <ColourSelect
            value="animatedBackgroundThree"
            selected={backgroundOption()}
            onClick={(backgroundName) => setBackgroundName(backgroundName)}
          />
        </ColourSelectGroup>
        {/* <button
          onClick={() => {
            window.localStorage.clear();
            window.history.pushState("", "Clocktime", window.location.pathname);
          }}
        >
          Reset to default
        </button> */}
      </div>
    </div>
  );
  return (
    <>
      <Fade in={optionsVisible()}>
        <div class="overlay" onClick={() => closeOptions()}>
          <Slide direction="left" in={optionsVisible()}>
            {optionsOverlay}
          </Slide>
        </div>
      </Fade>

      <div class={`app ${backgroundOption()}`}>
        <div class="time">
          <Digit number={hour} size={clockSize()} />
          <Digit number={hour2} size={clockSize()} />
        </div>
        <Show when={showDivider()}>
          <div class="divider">:</div>
        </Show>
        <div class="time">
          <Digit number={minute} size={clockSize()} />
          <Digit number={minute2} size={clockSize()} />
        </div>
        <Show when={showSeconds()}>
          <Show when={showDivider()}>
            <div class="divider">:</div>
          </Show>
          <div class="time">
            <Digit number={seconds} size={clockSize()} />
            <Digit number={seconds2} size={clockSize()} />
          </div>
        </Show>
        <span>
          <button class="optionsBtn" onClick={() => setOptionsVisible(true)}>
            options
          </button>
          {` | ${pkg.name} (${pkg.version})`}
        </span>
      </div>
    </>
  );
}
