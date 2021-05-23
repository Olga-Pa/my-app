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

  return (
  <>
    <Navbar></Navbar>
    <div className="container">
        <TodoForm onAdd={addHandler}></TodoForm>
        <ToDoList todos={todos}></ToDoList>
    </div>
   </>
  )
}

export default App;
