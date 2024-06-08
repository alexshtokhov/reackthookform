import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../Features/todos/todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

export default store;