import { configureStore } from '@reduxjs/toolkit';
// ? import authReducer from authSlice
import authReducer from './features/product/authSlice';

export const store = configureStore({
  reducer: {
    // ? Add the authReducer to the reducer object
    authUser: authReducer,
  },
  // ? show the devTools only in development
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
