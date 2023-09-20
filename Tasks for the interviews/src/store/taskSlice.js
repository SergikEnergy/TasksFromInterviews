import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'dailyTasks',
  initialState: {
    tasks: [],
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
});

export const { addTask, removeTask, changeComplete } = taskSlice.actions;

export default taskSlice.reducer;
