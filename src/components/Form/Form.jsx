import React, { useRef, useEffect, useState } from 'react';
import "./form.scss";
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from '../../utils/constants';
// import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { FormWithRender } from '../FormWithRender';


export const Form = ({ sendMessage }) => {
//   const [value, setValue] = useState('');
  const inputRef = useRef(null);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }

const handleSendMessage = (value) => {
    // e.preventDefault();
    sendMessage({
        id: uuidv4(),
        author: AUTHORS.user,
        text: value,
    });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage({
//         id: uuidv4(),
//         author: AUTHORS.user,
//         text: value,
//     });
    // inputRef.current?.focus();
    // setValue('');
  };

  useEffect(() => {
    inputRef.current?.focus();
  },[])

return (
    <FormWithRender 
        onSubmit={handleSendMessage}
        render={({ value, handleChange, handleSubmit }) => (
            <>
            <FormControl 
                className="text-field" 
                value={value} 
                onChange={handleChange}
                ref={inputRef} 
            />
            <Button type="submit" onPress={handleSubmit}>
                Send
            </Button>
            </>
        )}
      />
  );
};