import { JSXElement } from "solid-js";
import "./RadioGroup.css";

type RadioGroupProps = {
  children: JSXElement;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { children } = props;
  return (
    <div class="radioContainer">
      <ul>{children}</ul>
    </div>
  );
};
