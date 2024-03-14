import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItems.module.css';
import { deleteContact } from '../../redux/contactService';

const ContactItems = props => {
  const dispatch = useDispatch();

  const ContactDeleteHandler = () => {
    dispatch(deleteContact(props.id));
  };

  return (
    <li className={css.list}>
      <p>{props.name}</p>
      <p>{props.phone}</p>
      <button
        className={css.contactDelete}
        type="button"
        onClick={ContactDeleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

ContactItems.propTypes = {
  name: propTypes.string.isRequired,
  phone: propTypes.string,
  id: propTypes.string,
};

export default ContactItems;
