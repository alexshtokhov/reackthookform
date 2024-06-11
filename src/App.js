import './App.css';
import LoginForm from "./Components/LoginForm";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedPage from "./Components/ProtectedPage";
import RegForm from "./Components/RegForm";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<LoginForm isAuthenticated={setIsAuthenticated} />} />
                  <Route path="/protected" element={
                          isAuthenticated ? <ProtectedPage /> : <Navigate to="/registration" />} />
                  <Route path="/registration" element={<RegForm />} />
                  <Route path="/protected" element={<ProtectedPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
