import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/himatikadmin/*" element={<HomePage />} />
          <Route path="/himatikadmin/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
