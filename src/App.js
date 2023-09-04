import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import GamePage from './GamePage'
import SongList from './SongList'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/GamePage" element={<GamePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/SongList"element={<SongList/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
