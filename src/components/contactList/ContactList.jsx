// ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItems from '../../components/contactItems/ContactItems';
import { Card, CardBody } from 'react-bootstrap';

const ContactList = () => {
  // Folosind selectorul pentru a obține lista filtrată de contacte
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={styles.menu}>
      <h2>Lista de Contacte</h2>
      <Card>
        {visibleContacts.map(contact => (
          <CardBody key={contact.id}>
            <ContactItems
              id={contact.id}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
            />
          </CardBody>
        ))}
      </Card>
    </div>
  );
};

export default ContactList;
