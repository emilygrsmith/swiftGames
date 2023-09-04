import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import './GamePage.css'
import SongList from './SongList'
function GamePage()
{
    const navigate = useNavigate();
    const gameOne = () =>
    {
        navigate("/SongList");
    }
    return(
        <div className = 'gameOne'>
        <button className = 'gameOne' onClick = {gameOne}>Song Tracker</button></div>
       
    );
}
export default GamePage;