import React from "react";
import SelectItem from "./SelectItem";

export default {
  title: "SelectItem",
  component: SelectItem,
  argTypes: {
    property: {
      options: [
        { value: "task1", label: "task1" },
        { value: "task2", label: "task2" },
      ],
      control: { type: "select" },
    },
  },
};

const Template = (props) => <SelectItem {...props} />;

export const Info = Template.bind({});
Info.args = {
  property: 'value: "task1", label: "task1"',
};
