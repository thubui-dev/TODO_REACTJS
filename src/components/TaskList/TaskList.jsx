import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import AddItem from "../AddItem/AddItem";
import "./tasklist.css";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  const onClick = () => {
    setIsAdd(true);
  };

  const handleDone = (item) => {
    setTaskList((prev) =>
      prev.map((todo) => {
        if (todo.title === item.title) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (item) => {
    setTaskList((prev) =>
      prev.filter((todo) => {
        return todo.title !== item.title;
      })
    );
  };

  const handleSave = (todo) => {
    console.log(todo);
    setTaskList((prev) => [...prev, todo]);
    setIsAdd(false);
  };

  const onEditSave = (oldTodo, newTodo) => {
    setTaskList((prev) =>
      prev.map((todo) => {
        if (todo.title === oldTodo.title) {
          return {
            ...newTodo,
            isDone: false,
          };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const taskListFromLocalStorage = localStorage.getItem("taskList");
    console.log("taskListFromLocalStorage", taskListFromLocalStorage);
    setTaskList(JSON.parse(taskListFromLocalStorage) || []);
  }, []);

  useEffect(() => {
    console.log(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="todo-container">
      <h2>To Do List</h2>
      <div className="todo-item">
        <ul>
          {taskList?.map((item) => (
            <li key={item.title}>
              <Todo
                title={item.title}
                description={item.description}
                doneBtn={() => handleDone(item)}
                deleteBtn={() => handleDelete(item)}
                onSave={onEditSave}
                isDone={item.isDone}
              />
            </li>
          ))}
        </ul>
      </div>
      {isAdd && <AddItem saveBtn={handleSave} />}
      <button onClick={onClick}>Add</button>
    </div>
  );
}

export default TaskList;
