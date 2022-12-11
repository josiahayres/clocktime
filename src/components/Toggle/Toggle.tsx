import "./Toggle.css";

type ToggleProps = {
  onClick: () => void;
  label: string;
  checked: boolean;
};

export const Toggle = (props: ToggleProps) => {
  return (
    <div class="toggleContainer">
      <p>{props.label}</p>
      <label class="switch">
        <input
          title={props.label}
          type="checkbox"
          checked={props.checked}
          onChange={props.onClick}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};
