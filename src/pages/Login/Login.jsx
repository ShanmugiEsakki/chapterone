// Login.js
import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Link } from '@mui/material';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder authentication logic - replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
      alert('Login Successfully !')
    } else {
      console.log('Login failed. Please check your credentials.');
      alert('Login failed. Please check your credentials.')
    }
  };

  return (
    <div className='loginpage'>
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} className="login-paper">
          <Typography component="h1" variant="h3">
            Login
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin='normal'
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleLogin} sx={{ marginTop: 2 }}>
           Login
          </Button>
          
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
