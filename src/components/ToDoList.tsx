import classes from '*.module.sass';
import React from 'react';
import { ITodo } from '../interfaces';


type TodoListProps = {
  todos: ITodo[]
}
export const ToDoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
          <label>
              <input type="checkbox" checked={todo.completed}/>
              <span>{todo.title}</span>
            <i className="material-icon red-text">delete</i>
          </label>
          </li>
        )
      })}
    </ul>
  )
}