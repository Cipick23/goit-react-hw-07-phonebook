import { Card, CardBody } from 'react-bootstrap';
import FormSubmit from './formSubmit/FormSubmit';
import Filter from './filter/Filter';
import React, { useEffect } from 'react';
import ContactList from './contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactService';
import { selectError, selectIsLoading } from '../redux/selectors';
import { ClipLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#37cc57',
      }}
    >
      <Card>
        <h2>Phonebook</h2>
        <CardBody>
          <FormSubmit />
          <h4>Contacts</h4>
          <Filter />
          {isLoading && !error && <ClipLoader />}
          <ContactList />
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
