// Signup.js
import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignup = () => {
    // Placeholder signup logic - replace with actual signup logic
    if (password === confirmPassword) {
      console.log('User signed up!');
      alert('Welcome to Chapter One !');
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className='signup-page'>
      <Container component="main" maxWidth="xs">
        <Paper elevation={10} className="signup-paper">
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            className="signup-input"
            margin="normal"
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="signup-input"
            margin="normal"
            fullWidth
            label="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="signup-input"
            margin="normal"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="signup-input"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="signup-input"
            margin="normal"
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            error={!passwordsMatch}
            helperText={!passwordsMatch && 'Passwords do not match'}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            className="signup-button"
            variant="contained"
            color="primary"
            onClick={handleSignup}
            sx={{ marginTop: 2 }}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
