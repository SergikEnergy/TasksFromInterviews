import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const todoAll = (state: RootState) => state.todos.tasks;
export const filteredTodoActive = (state: RootState) => state.filters.selected;

const selectByFilter = createSelector([todoAll, filteredTodoActive], (allTasks, selection) => {
  if (selection === 'all') {
    return allTasks;
  } else if (selection === 'active') {
    return allTasks.filter((elem) => !elem.completed);
  } else return allTasks.filter((elem) => elem.completed);
});

export default selectByFilter;
