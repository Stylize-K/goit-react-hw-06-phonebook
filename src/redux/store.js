import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//Конфігурація для redux-persist
const persistConfig = {
  key: 'contacts',
  storage,
};

//Створюємо ""персистований" редюсер на основі contactsReducer
const persistedReducer = persistReducer(persistConfig, contactsReducer);

//Створюємо redux store
export const store = configureStore({
  reducer: {
    contacts: persistedReducer, // Редюсер, який буде взаэмодіяти з localStorage. Це "персистований" contactsReducer.
    filter: filterReducer,
  },
  //Додаємо middleware (прошарок), щоб позбутися помилок
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Експортуємо "персистований" stor (persistor) у зовнішній код. Використовується для PersistGate (обгортці для App)
