import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ITask, { ITaskState } from '../types';

export const getDummyTasks = createAsyncThunk<ITask[], undefined, { rejectValue: string }>(
  'dailyTasks/getDummyTasks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!response.ok) {
        return rejectWithValue(`Server doesn't answer. Check correct address!`);
      } else {
        return (await response.json()) as ITask[];
      }
    } catch (err: unknown) {
      if (err instanceof Error) return rejectWithValue(err.message);
      return rejectWithValue(`Unexpected error occurred`);
    }
  }
);

const initialState: ITaskState = {
  tasks: [],
  isLoaded: false,
  errorMessage: null,
};

const taskSlice = createSlice({
  name: 'dailyTasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: new Date().getTime(),
        completed: false,
        title: action.payload,
      });
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((elem) => elem.id !== action.payload);
    },
    changeComplete(state, action: PayloadAction<number>) {
      const currentTask = state.tasks.find((elem) => elem.id === action.payload);
      if (currentTask) currentTask.completed = !currentTask.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDummyTasks.pending, (state) => {
        state.isLoaded = true;
        state.errorMessage = null;
      })
      .addCase(getDummyTasks.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.tasks = action.payload;
      })
      .addCase(getDummyTasks.rejected, (state, action) => {
        state.isLoaded = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { addTask, removeTask, changeComplete } = taskSlice.actions;

export default taskSlice.reducer;
