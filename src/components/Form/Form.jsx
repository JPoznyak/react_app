import React, { useRef, useState } from "react";
import "./form.scss";
import { v4 as uuidv4 } from 'uuid';


export const Form = ({ sendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

//   const uuidv4 = () => {
//     ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
//       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//     );
//   }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
        id: uuidv4(),
        author: "Jen",
        text: value
    });
    // const refValue = inputRef.current.value;
    // console.log(refValue);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="text-field" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className="submit-btn" type="submit" />
    </form>
  )
}
