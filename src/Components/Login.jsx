import { toBeRequired } from '@testing-library/jest-dom/matchers';
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
// fetch user from api who want to login in thier account

    // axios
    // .get('/api/login', { email, password })
    // .then((response) => {
    //    Handle successful registration (e.g., redirect to dashboard)
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   Handle registration errors (e.g., display error message)
    //   console.error(error);
    // });

    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='pagehome'>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value) }
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className='blue' onClick={handleSubmit}>Login</button>
    </div>
  );
};
export default Login