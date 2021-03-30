import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState("");
  const [upList, setUpList] = useState("");

  const inputData = (event) => {
    const value = event.target.value;
    console.log(value);
    setList(value);
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
          <button>+</button>

          <ol>
            <li>{list}</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
