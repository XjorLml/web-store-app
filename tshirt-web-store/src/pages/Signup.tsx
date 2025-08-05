import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Paper,
  Link,
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Registering user:', { fullName, email, password });
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <PersonAddAltIcon />
            </Avatar>

            <Typography variant="h5" fontWeight="bold">
              Sign Up
            </Typography>

            <Box component="form" onSubmit={handleSignUp} width="100%" mt={2}>
              <TextField
                label="Full Name"
                fullWidth
                margin="normal"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <TextField
                label="Email"
                fullWidth
                margin="normal"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                fullWidth
                margin="normal"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                label="Confirm Password"
                fullWidth
                margin="normal"
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>
            </Box>

            <Typography variant="body2" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link component={RouterLink} to="/login" underline="hover" color="primary">
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
