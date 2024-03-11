import { createSelector } from '@reduxjs/toolkit';

// selectors.js (sau numele fișierului în care definești selectorii)
export const selectContacts = state => state.contacts.items;
export const selectFiltersContacts = state => state.contactsFilter.value;
export const selectContactStatus = state => state.contacts.status;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFiltersContacts],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
