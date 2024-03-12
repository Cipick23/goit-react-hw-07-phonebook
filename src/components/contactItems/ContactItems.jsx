// ContactItems.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactItems.module.css';
import { Button, Card } from 'react-bootstrap';
import { deleteContact } from '../../redux/contactSlice';

export default function ContactItems({ name, phoneNumber, id }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    // debugger;
    console.log('comanda de stergere este initializata cu succes', id);
    try {
      await dispatch(deleteContact(id));
      console.log('to delete item', id);
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <Card className={styles.list}>
      <p>
        {name} : {phoneNumber}
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  );
}
