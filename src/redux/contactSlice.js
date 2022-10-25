import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.loading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.unshift(payload);
      state.loading = false;
      state.error = null;
    },
    [deleteContact.fulfilled](state, { payload: id }) {
      state.items = state.items.filter(item => item.id !== id);
      state.loading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactReducer = contactSlice.reducer;
