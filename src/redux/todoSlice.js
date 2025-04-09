import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : [],
    },
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {
                id : Date.now(),
                title : action.payload,
                completed : false,
            };
            state.todos.push(newTodo);
        },
        toggleTodo : (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo : (state, action) => {
            const {id, newTitle} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if(todo) {
                todo.title = newTitle;
            }
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;