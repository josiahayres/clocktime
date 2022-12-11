import { JSXElement } from "solid-js";

type ConditionalProps = {
  when: boolean;
  children: JSXElement;
};
export function Conditional({
  when = true,
  children = null,
}: ConditionalProps) {
  console.log("conditional", when, children);
  return typeof when === "boolean" && !!when ? children : null;
}
