import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilter } from './filtersSlice';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
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
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, handleRejected)
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

export const selectItemsFilter = createSelector([selectContacts, selectFilter],
   (contacts, filter) =>  {
    switch (filter) {
      case filter:
       return contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));
    
      default: 
      return contacts;
    }
   });