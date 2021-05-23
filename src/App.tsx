import React, {useState} from 'react';
import { Navbar } from './components/navbar';
import { TodoForm } from './components/ToDoForm';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState([])
  const addHandler = (title: string) => {

  }
  return <>
    <Navbar></Navbar>
    <div className="container">
    <TodoForm></TodoForm>
    </div>
   </>
}

export default App;
