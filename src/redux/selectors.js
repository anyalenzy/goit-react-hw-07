export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const getError = (state) => state.contacts.error;

export const getIsLoading = (state) => state.contacts.isLoading;
