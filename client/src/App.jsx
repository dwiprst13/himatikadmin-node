import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import PageTemplates from './views/templates/PageTemplates';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/himatikadmin/*" element={<HomePage />} />
          <Route path="/himatikadmin/login" element={<LoginPage />} />
          <Route path="/himatikadmin/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
