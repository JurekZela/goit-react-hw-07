import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: 'contactInfo',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
    })
  } 
})

export  default contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;

// {
//   addContact: (state, action) => {
//     state.items.push(action.payload);
//   },
//   deleteContact: (state, action) => {
//     state.items = state.items.filter(item => item.id !== action.payload)
//   },
// }