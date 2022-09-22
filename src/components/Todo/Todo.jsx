import React, { useState } from "react";
import "./todo.css";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const onClick = () => {
    setEditing(true);
  };

  const onSave = () => {
    props.onSave(
      { title: props.title, description: props.description },
      {
        title,
        description,
      }
    );
    setEditing(false);
  };

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input onChange={onTitleChange} value={title} />
          <input onChange={onDescriptionChange} value={description} />
          <button onClick={onSave}>Save</button>
        </>
      ) : (
        <>
          <div>{props.title}</div>
          <div>{props.description}</div>
          {props.isDone ? (
            <div>Done!</div>
          ) : (
            <button onClick={props.doneBtn}>Done</button>
          )}
          <button onClick={onClick}>Edit</button>
          <button onClick={props.deleteBtn}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Todo;
