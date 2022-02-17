import { configureStore } from '@reduxjs/toolkit';
import Category from '../features/categoryReduser';

export const store = configureStore({
  reducer: {
    categories: Category,
  },
});
