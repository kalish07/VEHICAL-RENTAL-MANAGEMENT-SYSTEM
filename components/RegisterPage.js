import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomAppBar from '../components/CustomAppBar'; // Adjust the path as needed

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = ({ target: { name, value } }) => setForm(prev => ({ ...prev, [name]: value }));
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Register', form);
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            borderRadius: 1,
            p: 4,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Register</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {['name', 'email', 'password', 'confirmPassword'].map(field => (
                <TextField
                  key={field}
                  label={field.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  type={field.includes('password') ? 'password' : 'text'}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
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
                sx={{ mt: 2, backgroundColor: '#1e90ff', '&:hover': { backgroundColor: '#1c86ee' } }}
              >
                Register
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: '#1e90ff' }}>Login</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default RegisterPage;