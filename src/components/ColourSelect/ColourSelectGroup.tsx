import { JSXElement } from "solid-js";
import "../Radio/RadioGroup.css";
import "./ColourSelectGroup.css";

type ColourSelectGroupProps = {
  children: JSXElement;
};

export function ColourSelectGroup({ children }: ColourSelectGroupProps) {
  return (
    <div class="colourSelectGroup">
      <ul>{children}</ul>
    </div>
  );
}
