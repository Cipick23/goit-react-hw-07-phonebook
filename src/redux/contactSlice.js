// contactSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import contactService from 'service/contactService';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

// console.log('Reducer:', contactsReducer);

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const result = await contactService.get();
  console.log('Server result:', result);
  return result;
});

// debugger;
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async initialValues => {
    const response = await axios.post('/contacts', initialValues);
    console.log('Server response:', response.data);
    return response.data;
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await axios.delete(`/contacts/${contactId}`);
//     return contactId;
//   }
// );

export const setFilter = filter => ({
  type: 'contacts/setFilter',
  payload: filter,
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    // GET
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // CREATE
    builder.addCase(addContact.fulfilled, (state, action) => {
      console.log('Fulfilled action payload:', action.payload);
      // debugger;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.payload; // Aici setăm eroarea în starea globală pentru a o putea accesa
    });

    // builder.addCase(deleteContact.fulfilled, (state, action) => {
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // });
  },
});

export const { deleteContact } = contactSlice.actions;
// export default contactsReducer = contactSlice.reducer;
export default contactSlice.reducer;
