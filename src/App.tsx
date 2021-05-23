<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
=======
import React, {useState, useEffect} from 'react';
import { Navbar } from './components/navbar';
import { TodoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import { ITodo } from './interfaces';

declare var confirm: (question: string) => boolean

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    //setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }
  const toggleHandle = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        }
        return todo
    }))
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Are you sure you want to delet the element?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  
  return (
  <>
    <Navbar></Navbar>
    <div className="container">
        <TodoForm onAdd={addHandler}></TodoForm>
        <ToDoList
          todos={todos}
          onToggle={toggleHandle}
          onRemove={removeHandler} >
        </ToDoList>
    </div>
   </>
>>>>>>> 7adc6b4192478d9e7b82afa786e1cf0f81813c5f
  )
}

export default App