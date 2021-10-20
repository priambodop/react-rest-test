import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import { LOGIN_INVALID_INPUT } from '../../helpers/constant';
import { processLogin } from '../../services/actions/LoginActions';

class Login extends PureComponent {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.populateLoginPage = this.populateLoginPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      username: '',
      password: '',
      isAuthorized: false, 
    }
  }

  handleSubmit(){
    if(this.handleUserInput()){
      processLogin(this.state.username, this.state.password);
      this.setState({isAuthorized: true});
    }else{
      alert(LOGIN_INVALID_INPUT);
    }
  }

  handleUserInput(){
    if(this.state.username !== 'test' || !this.state.username){
      return false;
    }else if(this.state.password !== 'test' || !this.state.password){
      return false;
    }else{
      return true;
    }
  }

  redirectPage(){
    if(this.state.isAuthorized){
      return true;
    }else{
      return false;
    }
  }

  populateLoginPage(){
    return(
      <form onSubmit={this.handleSubmit}>
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

        <input type='submit' value='LOGIN' />
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.populateLoginPage()}
        {this.redirectPage() ? <Redirect push to='/dashboard' /> : null}
      </div>
    );
  }
}

export default Login;
