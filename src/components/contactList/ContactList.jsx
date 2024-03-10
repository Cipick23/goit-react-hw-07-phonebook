// ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItems from '../../components/contactItems/ContactItems';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ContactList = () => {
  // Folosind selectorul pentru a obține lista filtrată de contacte
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={styles.menu}>
      <h2>Lista de Contacte</h2>
      <ListGroup>
        {visibleContacts.map(({ id, name, phoneNumber }) => (
          <ListGroupItem key={id}>
            {/* Transmiterea proprietăților contactului la ContactItems */}
            <ContactItems id={id} name={name} phoneNumber={phoneNumber} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default ContactList;
