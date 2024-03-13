// selectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectContactStatus = state => state.contacts.status;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
// debugger;
export const selectFiltersContacts = state => state.contactsFilter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFiltersContacts],
  (contacts, filteredContacts) => {
    const actualFilter = filteredContacts || '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(actualFilter.toLowerCase())
    );
  }
);
