import "./Radio.css";

export type RadioProps = {
  onClick: (size: string) => void;
  value: string;
  selected: string;
  label?: string;
};

export const Radio = (props: RadioProps) => {
  return (
    <li id={props.value} onClick={() => props.onClick(props.value)}>
      <input
        type="radio"
        name="clocksize"
        title={props.label}
        value={props.value}
        checked={props.selected === props.value}
        onChange={() => props.onClick(props.value)}
      />
      <label for={props.value}>{props.label ?? props.value}</label>
      <div class="check">
        <div class="inside"></div>
      </div>
    </li>
  );
};
