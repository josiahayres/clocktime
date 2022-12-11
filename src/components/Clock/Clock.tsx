import { createEffect, createSignal } from "solid-js";

import "./Clock.css";

type ClockConfig = {
  hour: number;
  minute: number;
  visible: boolean;
};

type ClockProps = {
  size: "tiny" | "small" | "regular" | "large" | string;
  config: ClockConfig;
};

/**
 * A nicer clock with clean animation.
 * You must provide the time to this clock - it doesn't change on its
 * @source https://codepen.io/dope/pen/KJYMZz
 * @param {string} size
 */
export function Clock(props: ClockProps) {
  let hourHand: HTMLSpanElement | undefined = undefined;
  let minuteHand: HTMLSpanElement | undefined = undefined;

  /**
   * This effect determines what angle to set the hour and minute hands
   */
  createEffect(() => {
    if (isNaN(props.config.hour) || isNaN(props.config.minute)) return;
    if (!hourHand || !minuteHand) return;
    const hourInDegrees = props.config.hour * 30;
    const minuteInDegrees = props.config.minute * 6;
    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteInDegrees}deg)`;

    setClockClass(props.config.visible ? "wrap" : "wrap hidden");
  });

  const [clockClass, setClockClass] = createSignal("wrap");

  return (
    <div class={`clock ${props.size}`}>
      <div class={clockClass()}>
        <span ref={hourHand} class="hour"></span>
        <span ref={minuteHand} class="minute"></span>
        <span class="dot"></span>
      </div>
    </div>
  );
}
