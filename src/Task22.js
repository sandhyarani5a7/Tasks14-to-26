import React, { useState } from "react";

const Task22 = () => {
  const [stringState, setStringState] = useState("Hello, World!");
  const [numberState, setNumberState] = useState(42);
  const [booleanState, setBooleanState] = useState(true);
  const [arrayState, setArrayState] = useState([1, 2, 3, 4, 5]);
  const [objectState, setObjectState] = useState({ name: "sandhya", age: 30 });


  const updateArray = () => {
    const newArray = [...arrayState];
    newArray[2] = 99; 
    setArrayState(newArray);
  };

 
  const updateObject = () => {
    setObjectState({
      ...objectState,
      name: "ricky",
      age: 25
    });
  };

  return (
    <div>
      <h2>String State</h2>
      <p>{stringState}</p>

      <h2>Number State</h2>
      <p>{numberState}</p>

      <h2>Boolean State</h2>
      <p>{booleanState.toString()}</p>

      <h2>Array State</h2>
      <p>{arrayState.join(", ")}</p>
      <button onClick={updateArray}>Update Array</button>

      <h2>Object State</h2>
      <p>Name: {objectState.name}</p>
      <p>Age: {objectState.age}</p>
      <button onClick={updateObject}>Update Object</button>
    </div>
  );
};

export default Task22;
