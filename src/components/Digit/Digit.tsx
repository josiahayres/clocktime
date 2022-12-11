import { Accessor, createEffect, createSignal } from "solid-js";
import { Clock } from "../Clock/Clock";
import "./Digit.css";

type DigitProps = {
  number: Accessor<number>;
  size: "tiny" | "small" | "regular" | "large" | string;
};

/**
 * This component displays a number - using 6 AnalogClocks.
 * If no number is provided - will default to 0
 */
export function Digit(props: DigitProps) {
  let [digit, setDigit] = createSignal({
    topLeft: { hour: 3, minute: 30, visible: true },
    topRight: { hour: 9, minute: 30, visible: true },
    middleLeft: { hour: 12, minute: 30, visible: true },
    middleRight: { hour: 12, minute: 30, visible: true },
    bottomLeft: { hour: 12, minute: 15, visible: true },
    bottomRight: { hour: 9, minute: 0, visible: true },
  });

  createEffect(() => {
    switch (props.number()) {
      case 1:
        setDigit({
          topLeft: { hour: 6, minute: 30, visible: false },
          topRight: { hour: 6, minute: 30, visible: true },
          middleLeft: { hour: 6, minute: 15, visible: false },
          middleRight: { hour: 6, minute: 60, visible: true },
          bottomLeft: { hour: 3, minute: 60, visible: false },
          bottomRight: { hour: 12, minute: 60, visible: true },
        });
        break;
      case 2:
        setDigit({
          topLeft: { hour: 3, minute: 15, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 6, minute: 15, visible: true },
          middleRight: { hour: 12, minute: 45, visible: true },
          bottomLeft: { hour: 3, minute: 60, visible: true },
          bottomRight: { hour: 9, minute: 45, visible: true },
        });
        break;
      case 3:
        setDigit({
          topLeft: { hour: 3, minute: 15, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 3, minute: 15, visible: true },
          middleRight: { hour: 12, minute: 45, visible: true },
          bottomLeft: { hour: 3, minute: 15, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
      case 4:
        setDigit({
          topLeft: { hour: 6, minute: 30, visible: true },
          topRight: { hour: 6, minute: 30, visible: true },
          middleLeft: { hour: 12, minute: 15, visible: true },
          middleRight: { hour: 12, minute: 45, visible: true },
          bottomLeft: { hour: 3, minute: 15, visible: false },
          bottomRight: { hour: 12, minute: 60, visible: true },
        });
        break;
      case 5:
        setDigit({
          topLeft: { hour: 6, minute: 15, visible: true },
          topRight: { hour: 9, minute: 45, visible: true },
          middleLeft: { hour: 12, minute: 15, visible: true },
          middleRight: { hour: 6, minute: 45, visible: true },
          bottomLeft: { hour: 3, minute: 15, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
      case 6:
        setDigit({
          topLeft: { hour: 6, minute: 15, visible: true },
          topRight: { hour: 9, minute: 45, visible: true },
          middleLeft: { hour: 12, minute: 30, visible: true },
          middleRight: { hour: 6, minute: 45, visible: true },
          bottomLeft: { hour: 12, minute: 15, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
      case 7:
        setDigit({
          topLeft: { hour: 3, minute: 15, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 12, minute: 30, visible: false },
          middleRight: { hour: 12, minute: 30, visible: true },
          bottomLeft: { hour: 12, minute: 15, visible: false },
          bottomRight: { hour: 12, minute: 60, visible: true },
        });
        break;
      case 8:
        setDigit({
          topLeft: { hour: 3, minute: 30, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 3, minute: 30, visible: true },
          middleRight: { hour: 9, minute: 30, visible: true },
          bottomLeft: { hour: 3, minute: 60, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
      case 9:
        setDigit({
          topLeft: { hour: 3, minute: 30, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 3, minute: 0, visible: true },
          middleRight: { hour: 12, minute: 30, visible: true },
          bottomLeft: { hour: 3, minute: 15, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
      case 0:
      default:
        setDigit({
          topLeft: { hour: 3, minute: 30, visible: true },
          topRight: { hour: 9, minute: 30, visible: true },
          middleLeft: { hour: 12, minute: 30, visible: true },
          middleRight: { hour: 12, minute: 30, visible: true },
          bottomLeft: { hour: 12, minute: 15, visible: true },
          bottomRight: { hour: 9, minute: 0, visible: true },
        });
        break;
    }
  });

  return (
    <>
      {props.number}
      <div class="analog-digit">
        <Clock config={digit().topLeft} size={props.size} />
        <Clock config={digit().topRight} size={props.size} />
        <Clock config={digit().middleLeft} size={props.size} />
        <Clock config={digit().middleRight} size={props.size} />
        <Clock config={digit().bottomLeft} size={props.size} />
        <Clock config={digit().bottomRight} size={props.size} />
      </div>
    </>
  );
}
