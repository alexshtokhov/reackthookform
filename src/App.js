import './App.css';
import TodoForm from "./Components/TodoForm";
import LoginForm from "./Components/LoginForm";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedPage from "./Components/ProtectedPage";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={
                      <>
                      <LoginForm setIsAuthenticated={setIsAuthenticated} />
                      <TodoForm />
                      </>
                  } />
                  <Route
                      path="/protected"
                      element={
                          isAuthenticated ? <ProtectedPage /> : <Navigate to="/" />
                      }
                  />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
