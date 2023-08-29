import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import GamePage from './GamePage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/games" element={<GamePage />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
