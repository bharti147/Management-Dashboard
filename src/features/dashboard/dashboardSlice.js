
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
    addWidget(state, action) {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
        localStorage.setItem('categories', JSON.stringify(state.categories));
      }
    },
  },
});

export const { setCategories, addCategory, addWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;

