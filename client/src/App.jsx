// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute'; 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/himatikadmin/*" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/himatikadmin/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
