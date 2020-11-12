import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

  render(){

    return(
      <div className="loginContainer">
        <form className="loginForm">
          <input></input>
          <input></input>
          <button>Login</button>
        </form>
        <Link to='/create'>New Visitor? Create Account</Link>
        <Link to="/username">Forgot Username</Link>
        <Link to="/resetpassword">Forgot Password</Link>
      </div>
    )
  }
}

export default Login;