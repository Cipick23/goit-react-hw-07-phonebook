// rootReducer.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactSlice from '../redux/contactSlice';
import { contactsFilterReducer } from './contactsFilterSlice';

const persistConfig = {
  key: 'root',
  storage,
};
// debugger;

const rootReducer = combineReducers({
  contacts: contactSlice,
  contactsFilter: contactsFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: false,
});

// Vom extinde store-ul pentru a adăuga devTools
// const enhancer = devToolsEnhancer();

export const persistor = persistStore(store);