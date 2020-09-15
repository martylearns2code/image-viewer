import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header.js';
import Login from './screens/login/Login.js';
import Home from './screens/home/Home.js'; 
import 'typeface-roboto';


ReactDOM.render(
    <span>
        <Home/>
    </span>, 
    document.getElementById('root')
);
