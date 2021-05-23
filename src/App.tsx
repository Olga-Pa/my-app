import React from 'react';
import { Navbar } from './components/navbar';
import { Todo } from './components/ToDoForm';

const App: React.FunctionComponent = () => {
  return <>
    <Navbar></Navbar>
    <div className="container">
     <Todo></Todo>
    </div>
   </>
}

export default App;
