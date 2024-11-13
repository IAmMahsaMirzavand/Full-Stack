import React from 'react';



import TodoList from './Components/TodoList';
import { BrowserRouter as Router } from "react-router-dom"; 


const App = () => {
  return (
    <>
    
   
     {/* <TodoList/> */}
     <Router>  
      
     <TodoList/>
  </Router>,
   
    </>
  );
};

export default App;



