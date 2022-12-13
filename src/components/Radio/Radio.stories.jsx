import { Radio, RadioGroup } from "./index";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: { onClick: { action: "onClick" } },
};

const Template = (args) => (
  <RadioGroup>
    <Radio {...args}></Radio>
  </RadioGroup>
);

export const Selected = Template.bind({});
Selected.args = { value: "fish", selected: "fish", label: "Fish" };

export const WithMultiple = () => {
  let value = "fish";
  return (
    <RadioGroup>
      <Radio
        value="fish"
        selected={value}
        label="fish"
        onClick={(val) => (value = val)}
      ></Radio>
      <Radio
        value="chips"
        selected={value}
        label="chips"
        onClick={(val) => (value = val)}
      ></Radio>
    </RadioGroup>
  );
};
