import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { title: 'Buy Milk', completed: false },
    { title: 'Write Redux Toolkit code', completed: false },
    { title: 'Implement it with Todo', completed: false },
    { title: 'Setup Store', completed: false },
    { title: 'Create the UI', completed: false },
    { title: 'Play with it', completed: false },
    { title: 'Commit the code', completed: false },
  ],

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
    completed: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = true;
      }
    },
    notCompleted: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = false;
      }
    },
  },
});
export const { add, remove, completed, notCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
