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
            fontWeight: 'bold'
          }}
        >
          TeeStore
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/login"
            color="inherit"
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/products"
            color="inherit"
          >
            Shop
          </Button>
          <Button
            component={RouterLink}
            to="/checkout"
            color="inherit"
          >
            Checkout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
