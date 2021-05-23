import React, {useState} from 'react';
import { Navbar } from './components/navbar';
import { TodoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import { ITodo } from './interfaces';


const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
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
  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
  )
}

export default App;
