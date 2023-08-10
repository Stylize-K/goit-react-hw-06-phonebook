import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Андрій Шевченко', number: '+38-097-325-34-97' },
    { id: 'id-2', name: 'Сергій Ребров', number: '+38-096-421-65-70' },
    {
      id: 'id-3',
      name: 'Руслан Ротань',
      number: '+38-063-889-23-12',
    },
    { id: 'id-4', name: 'Андрій Ярмоленко', number: '+38-050-455-67-90' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
