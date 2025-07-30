import { useState, useEffect, useReducer } from "react";

/**
 * 1. Build a counter app with two buttons
 *  - One button increments the count
 *  - The second one decrements the count
 *  - state to keep track of count
 */

const Counter = () => {
  const [myBoolean, setMyBoolean] = useState(false);
  const defaultPerson = {
    name: "person",
    age: 34,
    country: "US",
  };
  const [person, setPerson] = useState(defaultPerson);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="">
      {"" + myBoolean} <br />
      <button onClick={() => setMyBoolean(!myBoolean)}>CLICK ME</button>
      {myBoolean ? (
        <div className="">
          <div>{person.name}</div>
          <div>{person.age}</div>
          <div>{person.country}</div>
        </div>
      ) : (
        ""
      )}
      <div>Count: {count}</div>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={() => setCount(count - 1)}>DECREASE</button>
    </div>
  );
};

export default Counter;