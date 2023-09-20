import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    todos: taskReducer,
  },
});

export default store;
