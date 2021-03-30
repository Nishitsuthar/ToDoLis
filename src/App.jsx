import React, { useState } from "react";

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
              return <li>{itemList}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
