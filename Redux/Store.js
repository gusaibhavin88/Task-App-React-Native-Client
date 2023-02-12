import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './Reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // message: messageReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
  },
});

export default store;
