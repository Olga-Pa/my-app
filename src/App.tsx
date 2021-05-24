import React, {useState, useEffect} from 'react';
import { Navbar } from './components/navbar';
import { ToDoForm } from './components/ToDoForm';
import { TodoList } from './components/TodoList';
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
        <ToDoForm onAdd={addHandler}></ToDoForm>
        <TodoList
          todos={todos}
          onToggle={toggleHandle}
          onRemove={removeHandler} >
        </TodoList>
    </div>
   </>
  )
}

export default App