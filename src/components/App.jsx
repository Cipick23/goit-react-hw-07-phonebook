import { Button, Card, CardBody, CardGroup } from 'react-bootstrap';
import FormSubmit from './formSubmit/FormSubmit';
import Filter from './filter/Filter';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react'; // Asigură-te că importezi `useState` de la 'react'
import ContactList from './contactList/ContactList';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Initializează state-ul isOpen

  // Presupunând că contacts este definit undeva, altfel asigură-te că este declarat.
  const contacts = []; // Aici poți să-ți adaugi datele sau să le initializezi cum dorești.

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
        {/* <ThemeButton toggleTheme={toggleTheme} /> */}
        <div>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </Button>
          {isOpen && (
            <CardBody>
              <h1>Phonebook</h1>
              <FormSubmit />
              {contacts.length > 0 && (
                <Card>
                  <h2>Contacts</h2>
                  <Filter />
                  <ContactList />
                </Card>
              )}
            </CardBody>
          )}
        </div>
        <ToastContainer />
      </CardGroup>
      {/* // </ThemeProvider> */}
    </div>
  );
};
