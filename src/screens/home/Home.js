import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/Header.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


class Home extends Component {
   render() {
       return (
           <div className="header">
               <Header heading="Image Viewer" homepage="true"/>
           </div>
       )
   }
}
export default Home;