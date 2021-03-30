import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [list, setList] = useState("");
  const [arr, setArr] = useState([]);

  const inputData = (event) => {
    setList(event.target.value);
  };
  const outputData = () => {
    setArr((oldVal) => {
      return [...oldVal, list];
    });
    setList("");
  };
  return (
    <>
      <div className="mainClass">
        <div className="workClass">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={inputData}
            value={list}
          />
          <button onClick={outputData}>+</button>

          <ol>
            {arr.map((itemList) => {
              return <ToDoList text={itemList} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
