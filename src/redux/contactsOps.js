import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66045d752ca9478ea17ddee5.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});