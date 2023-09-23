import React, { useState } from 'react';
import './Forms.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Implement the forgot password logic here
    console.log('Forgot Password clicked. Implement the reset password logic.');
  };

  const handleLoginOrSignup = () => {
    if (isSignUp) {
      // Perform sign-up logic
      console.log('Signing up with username:', username, 'and password:', password);
    } else {
      // Perform login logic
      console.log('Logging in with username:', username, 'and password:', password);
    }
  };

  const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');

const handleFullNameChange = (e) => {
  setFullName(e.target.value);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

  
    return (
        <div className="container">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {isSignUp && (
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" value={fullName} onChange={handleFullNameChange} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            <br />
          </div>
        )}
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button onClick={handleLoginOrSignup} style={{marginTop:'10px'}}>{isSignUp ? 'Sign Up' : 'Login'}</button>
        <br />
        <button onClick={handleToggleMode} style={{marginTop:'10px'}}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
        {!isSignUp && (
          <button className="forgot-password" onClick={handleForgotPassword} style={{marginTop:'10px'}}>
            Forget Password 
          </button>
        )}
      </div>
      );
      

};



export default Login;
