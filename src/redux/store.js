import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);





// import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from "./contactsSlice";
// import filterReducer from './filtersSlice'

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filters: filterReducer,
//   },
// });




// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import contactReducer from "./contactsSlice";
// import filterReducer from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";


// const persistedContactReducer = persistReducer(
//   {
//     key: "save-contacts",
//     storage,
//     whitelist: ["items"],
//   },
//   contactReducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactReducer,
//     filters: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);





















