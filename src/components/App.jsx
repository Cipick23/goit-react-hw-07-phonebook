import { Button, Card, CardBody, CardGroup } from 'react-bootstrap';
import FormSubmit from './formSubmit/FormSubmit';
import Filter from './filter/Filter';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react'; // Asigură-te că importezi `useState` de la 'react'
import ContactList from './contactList/ContactList';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Initializează state-ul isOpen

  // Presupunând că contacts este definit undeva, altfel asigură-te că este declarat.
  // const contacts = []; // Aici poți să-ți adaugi datele sau să le initializezi cum dorești.

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#37cc57',
      }}
    >
      {/* // <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}> */}
      <CardGroup>
        <div>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </Button>
          {isOpen && (
            <Card>
              <h1>Phonebook</h1>
              <CardBody>
                <Card.Title>Contacts</Card.Title>
                <Filter />
                <ContactList />
                <ToastContainer draggable={false} />
              </CardBody>
              <FormSubmit />
            </Card>
          )}
        </div>
      </CardGroup>
      {/* // </ThemeProvider> */}
    </div>
  );
};
