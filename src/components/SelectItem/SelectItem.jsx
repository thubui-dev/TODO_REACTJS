import React from "react";
import "./selectitem.scss";

function SelectItem(props) {
  const onSelect = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };

  return (
    <div>
      <select className="custom-select" onChange={onSelect}>
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
export default SelectItem;
