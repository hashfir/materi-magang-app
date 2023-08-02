import React, { useState } from 'react';
import { LayoutLogin } from './component'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can implement the login logic here
    navigate(`/home?email=${email}&pass=${password}`);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <LayoutLogin>
      <div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-light mt-4 w-100">Login</button>
        </form>
      </div>
    </LayoutLogin>

  )
}

export default LoginPage