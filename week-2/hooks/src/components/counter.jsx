import { useState } from "react";

/**
 * 1. Build a counter app with two buttons
 *  - One button increments the count
 *  - The second one decrements the count
 */

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => updateCount()}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setCount(prev => prev - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
