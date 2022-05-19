import { configureStore } from '@reduxjs/toolkit';
import BookSlice from '../features/MyBooksList';

export default configureStore({
  reducer: {
    books: BookSlice
  }
})