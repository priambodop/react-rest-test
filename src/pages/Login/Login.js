import React, { PureComponent } from 'react';
import Button from '../../components/Button/Button';
import { processLogin } from '../../services/actions/actions';
import './Login.css'

class Login extends PureComponent {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      password: '', 
    }
  }

  handleClick(){
    processLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="loginContainer">
        <h1>Welcome to The Login Page</h1>
        <p>Username:</p>
        <input
          type="text"
          onChange = {(event) => this.setState({username: event.target.value}) }
          value = {this.state.username}
        />
        <p>Password:</p>
        <input
          type="password"
          onChange={(event) => this.setState({password: event.target.value})}
          value={this.state.password}
        />
        <br />
        
        <Button pathName='dashboard' text='LOGIN' onClick={this.handleClick}  />
      </div>
    );
  }
}

export default Login;
