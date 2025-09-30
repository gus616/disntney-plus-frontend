import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from '../api/movieSlice';
import {useDispatch, useSelector } from "react-redux";
import { setupListeners } from '@reduxjs/toolkit/query';
import { categorySlice } from '../api/categorySlice';
import { recommendationSlice } from '../api/recommendationSlice';


export const store = configureStore({
  reducer: {
    [movieSlice.reducerPath]: movieSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [recommendationSlice.reducerPath]: recommendationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieSlice.middleware, categorySlice.middleware, recommendationSlice.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

setupListeners(store.dispatch);