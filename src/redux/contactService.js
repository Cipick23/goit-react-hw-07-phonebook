import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL =
  'https://65df58aeff5e305f32a2135e.mockapi.io/goit-react-hw-07-phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const {
        contacts: { contacts },
      } = thunkAPI.getState();

      if (contacts.find(item => item.name === contact.name)) {
        Notiflix.Notify.failure(
          `Contact with name '${contact.name}' is already in contacts.`
        );
        return thunkAPI.rejectWithValue('Contact already exist');
      }

      const response = await axios.post('/contacts', contact);
      Notiflix.Notify.success(
        `Contact with name '${contact.name}' has been added succesfully to contacts list.`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
