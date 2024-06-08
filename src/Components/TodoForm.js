import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {addTodo} from "../features/todos/todosSlice";
import styles from './TodoForm.module.css';

const TodoForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const onSubmit = (data) => {
        dispatch(addTodo(data.todo));
        reset();
    };


    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('todo', { required: true })}
                    placeholder="Enter task"
                />
                {errors.todo && <span>This field is required</span>}
                <button type="submit" className={styles.button}>Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoForm;