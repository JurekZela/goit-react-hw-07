import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from './contactsOps';


const contactsSlice = createSlice({
    name: 'contactInfo',
        initialState: {
              items: [],
              isLoading: false,
              error: null,
          },
        extraReducers: builder => {
          builder
           .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
           })
           .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.items = action.payload;
           })
           .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
           })
        }
      });

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;


// reducers: {
//   addContact: (state, action) => {
//     state.items.push(action.payload);
//   },
//   deleteContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload)
//   },
// },