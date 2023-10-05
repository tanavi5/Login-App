// src/components/Login.js
import React, { useState } from 'react';
import './login.css';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulated API call for authentication (replace with actual JWT authentication)
    if (user === 'exampleUser' && password === 'examplePassword') {
      onLogin(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="centered">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default login;
