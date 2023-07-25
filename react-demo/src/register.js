import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name , setName] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const navigate = useNavigate();
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const fetchLastId = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        const users = response.data;
        if (users.length > 0) {
          const lastUser = users[users.length - 1];
          setLastId(lastUser.id);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLastId();
  }, []);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setRegistrationError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/create', {
        id: lastId + 1,
        name: name,
        email: email,
        password: password,
        

        
      });

      // Handle successful registration here
      console.log('Registration successful!');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setRegistrationError(error.response.data.message);
      } else {
        setRegistrationError('An error occurred during registration');
      }
    }
  };

  return (
    <div   style={{ minHeight: '100vh' , display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
      <h1>Register</h1>
      <form onSubmit={handleFormSubmit}>
        <div   class="mb-3">
          <label htmlFor="email"  class="form-label" >name</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={handleNameChange}

            class="form-control"
          />
        </div>
        <div  class="mb-3">
          <label htmlFor="email"  class="form-label">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            class="form-control"
          />
        </div>
        <div   class="mb-3">
          <label htmlFor="password"  class="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            class="form-control"
          />
        </div>
        {registrationError && <p>{registrationError}</p>}
        <button type="submit" class="btn btn-primary">Register</button>
      </form>

      <div>
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
      
    </div>
  );
}

export default Register;
