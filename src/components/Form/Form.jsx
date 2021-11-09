import React, { useRef, useEffect, useState } from "react";
import "./form.scss";
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from "../../utils/constants";
import { Button } from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';


export const Form = ({ sendMessage }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
        id: uuidv4(),
        author: AUTHORS.user,
        text: value
    })
    inputRef.current?.focus();
    setValue('');
  }

//   useEffect(() => {
//     inputRef.current?.focus()
//   },[])

  return (
    <form onSubmit={handleSubmit}>
      {/* <input className="text-field" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className="submit-btn" type="submit" /> */}
      <FormControl className="text-field" 
        type="text" 
        inputRef={inputRef} 
        placeholder="Type your message" 
        value={value} 
        onChange={handleChange} />
  <br />
      <Button className="submit-btn" variant="primary" as="input" type="submit" value="Send" />{' '}
    </form>
  )
}
