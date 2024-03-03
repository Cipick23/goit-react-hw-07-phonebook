// contactSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

// Async Thunks
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw error;
    }
  }
);

export const setFilter = filter => ({
  type: 'contacts/setFilter',
  payload: filter,
});

// Slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Fetch Contacts
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // Add Contact
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // Delete Contact
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    });
  },
});

export default contactSlice;
