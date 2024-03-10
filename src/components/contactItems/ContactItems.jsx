// ContactItems.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactItems.module.css';
import { Button, Card } from 'react-bootstrap';
import { deleteContact } from '../../redux/contactSlice';

export default function ContactItems({ name, phoneNumber, id }) {
  const dispatch = useDispatch();

  const handleDelete = async id => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <Card className={styles.list}>
      <p>
        {name} : {phoneNumber}
      </p>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
    </Card>
  );
}
