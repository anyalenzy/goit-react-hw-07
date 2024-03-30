import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const getError = (state) => state.contacts.error;

export const getIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
