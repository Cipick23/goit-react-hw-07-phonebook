// ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItems from '../../components/contactItems/ContactItems';
import { Card, CardBody, CardTitle } from 'react-bootstrap';

const ContactList = () => {
  // Folosind selectorul pentru a obține lista filtrată de contacte
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Card className={styles.menu}>
      <CardTitle>Lista de Contacte</CardTitle>
      <CardBody>
        {visibleContacts.map(contact => (
          <div key={contact.id}>
            <ContactItems
              id={contact.id}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
            />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default ContactList;
