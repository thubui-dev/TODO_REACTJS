import React from "react";

function SelectItem(props) {
  const onSelect = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };

  return (
    <select onChange={onSelect}>
      {props.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
export default SelectItem;
