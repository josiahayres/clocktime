import "./Radio.css";

export type RadioProps = {
  onClick: (size: string) => void;
  value: string;
  selected: string;
  label?: string;
};

export const Radio = ({
  value = "",
  selected = "",
  label,
  onClick,
}: RadioProps) => {
  return (
    <li id={value} onClick={() => onClick(value)}>
      <input
        type="radio"
        name="clocksize"
        title={label}
        value={value}
        checked={selected === value}
        onChange={() => onClick(value)}
      />
      <label for={value}>{label ?? value}</label>
      <div class="check">
        <div class="inside"></div>
      </div>
    </li>
  );
};
