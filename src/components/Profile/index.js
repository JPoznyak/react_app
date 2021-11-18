import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";
import { Container, Form } from "react-bootstrap";
import './profile.scss'

export const Profile = () => {
  // const state = store.getState();
  const checkboxValue = useSelector(state => state.checkbox);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();


  const checkboxChange = () => {
    dispatch(toggleCheckbox);
  }

  return (
    <Container>
      <h3>Profile</h3>
      <Form.Group className="checkbox mb-3">
        <Form.Check 
            type="checkbox"
            checked={checkboxValue} 
            onChange={checkboxChange} 
            label={name} />
        </Form.Group>
    </Container>
  );
};