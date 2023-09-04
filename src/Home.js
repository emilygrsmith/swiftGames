import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Link } from 'react-router-dom';
import './Home.css'
function Home()
{
    const navigate = useNavigate();
    const home = () =>
    {
        navigate("GamePage")
    }
    return(
        <div className="main">
            <h1>Welcome to Taylor Swift Games</h1>
           
            <button className = 'continue' onClick = {home}>Click to Continue</button></div>
       
    );
}
export default Home;