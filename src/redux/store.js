import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactSlice';
import { filterReducer } from '../redux/contactsFilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
