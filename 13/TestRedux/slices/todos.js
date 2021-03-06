import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id: 1, text: '리액트 네이티브 배우기', done: true}, 
  {id: 2, text: '상태 관리 배우기', done: false}, 
]

let nextId = 3; 

const todosSlice = createSlice({
  name: 'todos',
  initialState, 
  reducers: {
    add: {
      prepare: (text) => {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;
        return prepared;
      }, 
      reducer: (state, action) => {
        state.push({
          ...action.payload, 
          done: false, 
        });
      }, 
    }, 
    remove: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index);
    }, 
    toggle: (state, action) => {
      const selected = state.find((todo) => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    }, 
  }, 
});

export const { add, remove, toggle } = todosSlice.actions;
export default todosSlice.reducer;