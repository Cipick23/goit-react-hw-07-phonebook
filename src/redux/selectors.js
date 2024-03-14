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
    // Verificați dacă contacts este definit și nu este null
    if (contacts && Array.isArray(contacts)) {
      const actualFilter = filteredContacts || '';
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(actualFilter.toLowerCase())
      );
    } else {
      // În cazul în care contacts este undefined sau nu este un array valid, returnați un array gol sau o altă valoare implicită
      return [];
    }
  }
);
