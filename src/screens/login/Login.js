import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/Header.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {
	
	constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
			incorrectCredentials: "dispNone"
            
        }
    }  
	loginClickHandler = event => {
        //alert("clicked");
		let userName='moorthy';
		let password='1234';
		let accessToken;
		this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
		if(this.state.username !== "" && this.state.username !== userName){
			this.setState({incorrectCredentials:"dispBlock"});
		} 
		if(this.state.loginPassword !== "" && this.state.loginPassword !== password){
			this.setState({incorrectCredentials:"dispBlock"});
		} 
    }
	usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
		this.setState({ usernameRequired: "dispNone" });
    }
	loginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
		this.setState({ loginPasswordRequired: "dispNone" });
    }
   render() {
       return (
           <div className='app-login'>
               <Header/>
			   <div className='login-card'>
			      <Card>
			          <CardContent>
					      <FormControl >
                                    <Typography color="textSecondary">
                                       <h1> LOGIN</h1>
                                    </Typography>
                                </FormControl>
								<br/><br/>

                                <FormControl required>
                                    <InputLabel htmlFor="username" style={{fontSize:20}} > UserName</InputLabel>
                                    <Input id="username" type="text" style={{width:350}} username={this.state.username} onChange={this.usernameChangeHandler} />
									<FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                </FormControl>
								<br/><br/>
								<FormControl required>
                                    <InputLabel htmlFor="loginPassword" style={{fontSize:20}}> Password</InputLabel>
                                    <Input id="loginPassword" type="password" style={{width:350}} loginPassword={this.state.loginPassword} onChange={this.loginPasswordChangeHandler}/>
									<FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
								<FormHelperText className={this.state.incorrectCredentials}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                                </FormControl>
								<br/>
								<br/>
								<FormControl >
                                    <Button variant="contained" color="primary" className="login-button" onClick={this.loginClickHandler}>
                                        LOGIN
                                    </Button>
                                </FormControl>
					  
					  </CardContent>
			   
			   
			      </Card>
			   
			   
			   
			   </div>
           </div>
       )
   }
}
export default Login;