import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDummyTasks = createAsyncThunk('dailyTasks/getDummyTasks', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) {
      throw new Error(`Incorrect answer from the server.`);
    }
    const todos = await response.json();
    return todos;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const taskSlice = createSlice({
  name: 'dailyTasks',
  initialState: {
    tasks: [],
    isLoaded: false,
    errorMessage: null,
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().getTime(),
        completed: false,
        task: action.payload.task,
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((elem) => elem.id !== action.payload);
    },
    changeComplete(state, action) {
      const currentTask = state.tasks.find((elem) => elem.id === action.payload);
      currentTask.completed = !currentTask.completed;
      console.log(currentTask);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDummyTasks.pending, (state, action) => {
        state.isLoaded = true;
        state.errorMessage = null;
      })
      .addCase(getDummyTasks.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.tasks = action.payload;
        state.errorMessage = null;
      })
      .addCase(getDummyTasks.rejected, (state, action) => {
        state.isLoaded = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { addTask, removeTask, changeComplete } = taskSlice.actions;

export default taskSlice.reducer;
