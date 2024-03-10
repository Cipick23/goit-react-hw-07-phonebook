// selectors.js (sau numele fișierului în care definești selectorii)
export const selectContacts = state => state.contacts.items;
export const selectFiltersContacts = state => state.contacts.filter;

// Selectorul nou adăugat pentru a obține lista de contacte vizibile
export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFiltersContacts(state);

  // Logica de filtrare a contactelor în funcție de filtru
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const selectContactStatus = state => state.contacts.status;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
