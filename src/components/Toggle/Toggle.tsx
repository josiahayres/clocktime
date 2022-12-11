import "./Toggle.css";

type ToggleProps = {
  onClick: () => void;
  label: string;
  checked: boolean;
};

export const Toggle = ({
  onClick,
  label = "",
  checked = false,
}: ToggleProps) => {
  return (
    <div class="toggleContainer">
      <p>{label}</p>
      <label class="switch">
        <input
          title={label}
          type="checkbox"
          checked={checked}
          onChange={onClick}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};
