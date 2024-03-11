import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const contactsFilterSlice = createSlice({
  name: 'contactsFilter',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log('se afiseaza valorile lui action.payload', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setFilter } = contactsFilterSlice.actions;
export const contactsFilterReducer = contactsFilterSlice.reducer;
