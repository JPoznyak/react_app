import React, { useState, useCallback } from "react";

export const Counter = ( { text }) => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
      console.log(text);
  }, [text]);

  const decrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1);

  }, []);

  return (
    <div>
        <button onClick={decrease}>-</button>
            <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};