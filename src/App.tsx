import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";
import React from "react";
import Todo from "./Components/Todo";
import Login from "./Components/Login";


const App: React.FC = () => {
  return (
    <div>
      
      <Router>
        
       
        <Routes>
        <Route path="/" element={<Todo />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
