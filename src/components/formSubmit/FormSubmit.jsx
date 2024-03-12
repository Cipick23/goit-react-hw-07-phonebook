import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contactSlice';
import styles from './FormSubmit.module.css';
import * as yup from 'yup';
import { Button, FormLabel } from 'react-bootstrap';
import { selectContactStatus } from '../../redux/selectors';
import { setFilter as setContactsFilter } from '../../redux/contactsFilterSlice';

const FormSubmit = () => {
  const contactStatus = useSelector(selectContactStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactStatus === 'idle') {
      dispatch(fetchContacts());
    }
  }, [contactStatus, dispatch]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(1, 'Too Short Name!')
      .max(50, 'Too Long Name!')
      .required('Please write a name'),
    phoneNumber: yup
      .string()
      .min(9, 'Invalid Phone Number')
      .required('Please fill up the phone number!'),
  });

  const handleSubmit = async (items, actions) => {
    try {
      console.log('Submitting form with values:', items);

      const response = await dispatch(addContact(items));

      console.log('API response:', response);

      const newContact = response.payload;

      if (newContact) {
        console.log('Adding contact to state.items:', newContact);
        const message = newContact
          ? `${newContact.name} added successfully!`
          : 'Contact added successfully!';

        toast(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
        });

        console.log('Contact added successfully!');
      } else {
        console.error(
          'Error adding contact: Contact information not available.'
        );
        // debugger;
        return response.payload;
      }

      console.log('Values before resetForm:', items);

      actions.resetForm({
        values: {
          name: '',
          phoneNumber: '',
        },
      });
    } catch (error) {
      console.error('Error adding contact', error);
    } finally {
      dispatch(addContact(items));
      dispatch(setContactsFilter(''));
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormLabel className={styles.label} htmlFor="name">
          Name
        </FormLabel>
        <div className={styles.inputWrapper}>
          <Field
            className={styles.field}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>

        <FormLabel className={styles.label} htmlFor="phoneNumber">
          Number
        </FormLabel>

        <div className={styles.inputWrapper}>
          <Field
            className={styles.field}
            type="number"
            name="phoneNumber"
            placeholder="123 45 6789"
          />
        </div>

        <ErrorMessage
          className={styles.error}
          component="span"
          name="phoneNumber"
        />

        <Button className={styles.contactBtn} type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default FormSubmit;
