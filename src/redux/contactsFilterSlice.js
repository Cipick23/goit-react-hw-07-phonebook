// contactsFilterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'contactsFilter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = contactsFilterSlice.actions;
export const contactsFilterReducer = contactsFilterSlice.reducer;
