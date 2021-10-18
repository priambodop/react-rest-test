import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Login.css'

class Login extends PureComponent {

  

  render() {
    return (
      <div className="loginContainer">
        <h1>Welcome to The Login Page</h1>
        <p>Username:</p>
        <input
          type="text"
        />
        <p>Password:</p>
        <input
          type="password"
        />
        <br />
        
        <Button pathName='dashboard' text='LOGIN' />
      </div>
    );
  }
}

export default Login;
