import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import './GamePage.css'
function GamePage()
{
    // const navigate = useNavigate();
    // const login = () =>
    // {
    //     navigate("Login")
    // }
    return(
        <div class="main">
            <h1>Welcome to Your Planner</h1>
            {/* <button onClick = {login}>Click to Begin</button> */}
        </div>
    );
}
export default GamePage;