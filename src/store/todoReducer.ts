import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ITodo {
  id: string;
  description: string;
  category: string;
  content: string;
}

type TodoState = {
  values: ITodo[];
};

const initialState: TodoState = {
  values: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.values = [...state.values, action.payload];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.values = state.values.filter((todo) => todo.id !== action.payload);
    },
    removeTodos: (state, action: PayloadAction<string[]>) => {
      state.values = state.values.filter(
        (todo) => !action.payload.includes(todo.id)
      );
    },
  },
});

export const { addTodo, removeTodo, removeTodos } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todoList.values;

export default todoSlice.reducer;
