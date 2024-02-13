'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  newTodo: '',
}

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    toggleDone: (state, action) => {
      const id = action.payload
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    },

    addTodo: (state, action) => {
      const { title, id } = action.payload
      state.todos.push({ title, done: false, id })
      state.newTodo = '' // Clear the input field after adding a todo
    },

    deleteTodo: (state, action) => {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },

    filterDone: (state) => {
      state.todos = state.todos.filter((todo) => !todo.done)
    },

    filterNotDone: (state) => {
      state.todos = state.todos.filter((todo) => todo.done)
    },
  },
})

export const { toggleDone, addTodo, deleteTodo, filterDone, filterNotDone } =
  stateSlice.actions

export default stateSlice.reducer
