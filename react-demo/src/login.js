import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
      const users = response.data;

      const foundUser = users.find(
        (user) => user.email === username && user.password === password
      );

      if (foundUser) {
        setIsLoggedIn(true);
      } else {
        setLoginError('Invalid username or password');
      } 
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn) {
    navigate('/ShowArticles');
  }

  return (
    <div   style={{ minHeight: '100vh' , display: 'flex',flexDirection: 'column',alignItems: 'center' }} >
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div  class="mb-3">
          <label htmlFor="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            class="form-control"
          />
        </div>
        <div  class="mb-3">
          <label htmlFor="password"  class="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            class="form-control"
          />
        </div>
        {loginError && <p>{loginError}</p>}
        <button type="submit"  class="btn btn-primary">Login</button>
      </form>
     <div>
      <p>Don't have an account? <a href="/register">Register</a></p>
     </div>
    </div>

    
  );
}

export default Login;
