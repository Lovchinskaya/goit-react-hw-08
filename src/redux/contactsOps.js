// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://67ed6d444387d9117bbd96e1.mockapi.io/";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("contacts");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await axios.post("contacts", newContact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`contacts/${contactId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );














// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://67ed6d444387d9117bbd96e1.mockapi.io/';


// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, thunkAPI) => {
//       try {
//         const res = await axios.get('/contacts');
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );