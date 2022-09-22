import React from "react";

function Radio(props) {
  const onChangeValue = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };
  return (
    <>
      <h1>Gender</h1>
      <div onChange={onChangeValue}>
        {props.options.map((option) => (
          <>
            <input
              value={option.value}
              type="radio"
              checked={props.value === option.value}
            />
            {option.label}
          </>
        ))}
      </div>
    </>
  );
}
export default Radio;
