import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomAppBar from '../components/CustomAppBar'; // Adjust the path as needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login', { email, password });
  };

  return (
    <Box>
      <CustomAppBar />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'url("https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover no-repeat',
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            borderRadius: 1,
            p: 4,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {['email', 'password'].map(field => (
                <TextField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  type={field === 'password' ? 'password' : 'text'}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={field === 'email' ? email : password}
                  onChange={e => field === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)}
                  InputProps={{ style: { color: '#fff' } }}
                  InputLabelProps={{ style: { color: '#bbb' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#888' },
                      '&.Mui-focused fieldset': { borderColor: '#1e90ff' },
                    },
                  }}
                />
              ))}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, bgcolor: '#1e90ff', '&:hover': { bgcolor: '#1c86ee' } }}
              >
                Login
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  Don't have an account?{' '}
                  <Link to="/register" style={{ color: '#1e90ff' }}>Register</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;