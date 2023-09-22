import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState, Categories } from '../types';

const initialState: IFilterState = {
  buttons: [
    { category: 'all', isActive: true },
    { category: 'completed', isActive: false },
    { category: 'active', isActive: false },
  ],
  selected: 'all',
};

const filterSlice = createSlice({
  name: 'selectFilters',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.buttons.map((elem) => {
        if (elem.category === action.payload) {
          return (state.selected = elem.category as Categories);
          elem.isActive = true;
        }
        return true;
        elem.isActive = false;
      });
    },
    selectActiveFilter(state, action: PayloadAction<string>) {
      state.buttons.map((elem) => {
        if (elem.category === action.payload) {
          return (elem.isActive = true);
        }
        return (elem.isActive = false);
      });
    },
  },
});

export const { changeFilter, selectActiveFilter } = filterSlice.actions;
export default filterSlice.reducer;
