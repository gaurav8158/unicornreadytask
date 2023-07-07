import React, { useState } from 'react'
const Signup = ({ handleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
// post data of new user who register to api

    // axios
    // .post('/api/signup', { email, password })
    // .then((response) => {
    //    Handle successful registration (e.g., redirect to dashboard)
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //    Handle registration errors (e.g., display error message)
    //   console.error(error);
    // });

    handleSignUp(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='pagehome'>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className='blue' onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default Signup;