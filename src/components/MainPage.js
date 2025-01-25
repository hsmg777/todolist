import React, { useEffect, useState } from "react";
import './styles/MainPage.css'
import { useNavigate } from "react-router-dom";


const MainPage = () =>{
    const navigate = useNavigate(); 

    const begin = () =>{
        navigate("/dashboard");
    };
    return(
        <div className="main-page">
            <h1>TASKDO</h1>
            <h4>Hecho por el grupo 2</h4>
            <button className="begin-button" onClick={begin}>Empecemos</button>
        </div>
    );
};

export default MainPage;