import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import './Home.css'
function Home()
{
    const navigate = useNavigate();
    const home = () =>
    {
        navigate("Home")
    }
    return(
        <div class="main">
            <h1>Welcome to Taylor Swift Games</h1>
            <button onClick = {home}>Click to Continue</button>
        </div>
    );
}
export default Home;