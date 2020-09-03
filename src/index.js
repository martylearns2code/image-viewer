import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header.js';
import Login from './screens/login/Login.js'; 
import 'typeface-roboto';


ReactDOM.render(
    <span>
        <Login/>
    </span>, 
    document.getElementById('root')
);
