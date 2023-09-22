import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    todos: taskReducer,
    filters: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
