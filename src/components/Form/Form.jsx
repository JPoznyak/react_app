import React, { useRef, useEffect, useState } from 'react';
import "./form.scss";
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from '../../utils/constants';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Input } from '../Input/Input';

export const Form = ({ sendMessage }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
        id: uuidv4(),
        author: AUTHORS.user,
        text: value,
    });
    inputRef.current?.focus();
    setValue("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  },[])

return (
    <form onSubmit={handleSubmit}>
        <FormControl className="text-field" value={value} onChange={handleChange} />
        <Button className="my-btn" type="submit">
        Send
        </Button>
    </form>
  );
};