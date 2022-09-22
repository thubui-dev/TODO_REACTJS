// import logo from "./logo.svg";
import "./App.scss";
import React, { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import SelectItem from "./components/SelectItem/SelectItem";
import Radio from "./components/Radio/Radio";

function App() {
  const [options, setOptions] = useState([
    { value: "task1", label: "Task1" },
    { value: "task2", label: "Task2" },
  ]);
  // const [todos, setTodos] = useState();
  const [gender, setGender] = useState([
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ]);
  const [selectedRadio, setRadio] = useState("");

  const handleChange = () => {};

  const handleOnChange = (selected) => {
    setRadio(selected);
  };

  console.log("app");

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TaskList />
      <SelectItem options={options} onChange={handleChange} />
      <Radio onChange={handleOnChange} options={gender} value={selectedRadio} />
    </div>
  );
}

export default App;
