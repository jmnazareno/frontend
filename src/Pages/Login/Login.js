import React, { useState } from 'react';
import axios from 'axios';
import { FRAPPE_BASE_URL } from '../../Data/Constants';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${FRAPPE_BASE_URL}/api/method/login`, {
        usr: username,
        pwd: password,
      });

      console.log('Login Response:', response.data);

      if (response.data.message === 'Logged In') {
        // Assuming your token is in response.data.auth_token (adapt this based on the actual response structure)
        const authToken = response.data.auth_token;

        // Store the authentication token in your React app
        localStorage.setItem('authToken', authToken);
        alert('Login successful!');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed:', error.response || error);

      if (error.response && error.response.data && error.response.data.message) {
        setError(`Login failed: ${error.response.data.message}`);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <h2>Donation Portal | Login</h2>
      <label>Email/Username</label>
      <input
        type="text"
        placeholder="Enter your email or username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <input type="checkbox" checked={rememberMe} onChange={handleRememberMe} />
        <span>Remember me</span>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
