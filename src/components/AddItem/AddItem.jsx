import React, { useState } from "react";
import "./additem.css";

function AddItem(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onSave = () => {
    props.saveBtn({
      title,
      description,
    });
  };

  return (
    <div className="add-item">
      <input onChange={onTitleChange} value={title} />
      <input onChange={onDescriptionChange} value={description} />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default AddItem;
