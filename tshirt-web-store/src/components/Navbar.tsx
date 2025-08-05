import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: '#000', // yellow accent or any contrasting color
            },
          }}

        >
          Tshirt Web Store
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/login"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover background
                color: '#fff', // Keep text white
              },
            }}
          >
            Sign In
          </Button>

          <Button
            component={RouterLink}
            to="/products"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
              },
            }}
          >
            Shop
          </Button>

          <Button
            component={RouterLink}
            to="/checkout"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
