import "../../pages/Clock.css";
import "./ColourSelect.css";

type ColourSelectProps = {
  onClick: (size: string) => void;
  value: string;
  selected: string;
  hoverText?: string;
};

export const ColourSelect = (props: ColourSelectProps) => {
  return (
    <li
      id={props.value}
      onClick={() => props.onClick(props.value)}
      aria-label={props.hoverText}
      class={props.value}
    >
      <input
        type="radio"
        name="backgroundColour"
        title={props.value}
        value={props.value}
        checked={props.selected === props.value}
      />
      <div class="check"></div>
    </li>
  );
};
