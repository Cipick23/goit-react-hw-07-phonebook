import {
  Button,
  Card,
  CardBody,
  CardGroup,
  ThemeProvider,
} from 'react-bootstrap';
import FormSubmit from './formSubmit/FormSubmit';
import Filter from './filter/Filter';
// import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react'; // Asigură-te că importezi `useState` de la 'react'
import ContactList from './contactList/ContactList';
import ThemeButton from './themeButton/ThemeButton';

const theme = {
  light: {
    colors: {
      mainBgColor: '#e9ecef',
      textColor: '#050505',
      contactBtn: '#2982ff',
      deleteBtn: '#ff2929',
      bgWrapper: '#f8f9fa',
      containerColor: '#dee2e6',
      itemsEven: '#f8f9fa',
      itemsOdd: '#dee2e6',
      boxShadow: 'rgba(255, 255, 255, 0.5)',
    },
  },
  dark: {
    colors: {
      mainBgColor: '#1E1E1E',
      textColor: '#fffaff',
      contactBtn: '#2982ff',
      deleteBtn: '#ff2929',
      bgWrapper: '#0b0014',
      containerColor: '#050505',
      itemsEven: '#212529',
      itemsOdd: '#343a40',
      boxShadow: 'none',
    },
  },
};

export const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Initializează state-ul isOpen

  // Presupunând că contacts este definit undeva, altfel asigură-te că este declarat.
  const contacts = []; // Aici poți să-ți adaugi datele sau să le initializezi cum dorești.

  const [isDarkTheme, setIsDarkTheme] = useState(contacts.length > 0);

  const toggleTheme = () => {
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);
  };

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
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <CardGroup>
          <ThemeButton toggleTheme={toggleTheme} />
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
                  {/* <ToastContainer draggable={false} /> */}
                  <FormSubmit />
                </CardBody>
              </Card>
            )}
          </div>
        </CardGroup>
      </ThemeProvider>
    </div>
  );
};
