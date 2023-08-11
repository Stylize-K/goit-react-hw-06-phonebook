import { createSlice } from '@reduxjs/toolkit';

//Початкове значення масива contacts у redux-стейті
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Andriy Shevchenko', number: '+38-097-325-34-97' },
    { id: 'id-2', name: 'Serhiy Rebrov', number: '+38-096-421-65-70' },
    {
      id: 'id-3',
      name: 'Ruslan Rotan',
      number: '+38-063-889-23-12',
    },
    { id: 'id-4', name: 'Andriy Yarmolenko', number: '+38-050-455-67-90' },
  ],
};

//Створюємо contactsSlice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      //   state.contacts.push(action.payload) - можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; // Експортуємо actions у зовнішній код
export const contactsReducer = contactsSlice.reducer; // Експортуємо filterReducer у зовнішній код
