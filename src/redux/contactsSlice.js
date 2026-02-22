import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContactToList, deleteContact } from "./contactsOps";
import { selectFilter } from './filtersSlice';

const handlePending = (state) => {
  state.loading = true;

};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contactInfo',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContactToList.pending, handlePending)
    .addCase(addContactToList.fulfilled, (state, action) => {
      
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContactToList.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id)
    })
    .addCase(deleteContact.rejected, handleRejected)
  } 
})

export  default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
   (contacts, filter) =>  {
    switch (filter) {
      case filter:
       return contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));
    
      default: 
      return contacts;
    }
   });