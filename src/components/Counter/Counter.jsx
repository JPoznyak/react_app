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

// import React, { useState, useEffect, useCallback } from "react";

// export const Counter = ({ text }) => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//     console.log(text);
//   }, [text]);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCount((prevCount) => prevCount + 1),
//       2000
//     );
//     console.log("-=-=-=-=-=-=-=-=- like did mount, []");

//     return () => {
//       clearInterval(interval);
//       console.log("unmounting");
//     };
//   }, []);

//   return (
//     <>
//       <h3>{count}</h3>
//       <h3>{text}</h3>
//       <button onClick={handleClick}>Click!</button>
//     </>
//   );
// };
