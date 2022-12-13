import { Clock } from "./Clock";

export default {
  title: "Components/Clock",
  component: Clock,
  args: {
    config: {
      hour: 1,
      minute: 2,
      visible: true,
    },
    size: "md",
  },
};

const Template = (args) => <Clock {...args}></Clock>;

export const Default = Template.bind({});
Default.args = {
  config: {
    hour: 1,
    minute: 2,
    visible: true,
  },
  size: "sm",
};
