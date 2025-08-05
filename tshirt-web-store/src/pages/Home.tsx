import { Box, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          borderRadius: 6,
          p: 6,
          maxWidth: 700,
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      >
        <Typography variant="h3" component="h1" fontWeight="extrabold" color="primary" gutterBottom>
          Welcome to TShirt Web Store
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          Customize your T-shirts and ship nationwide with ease.
        </Typography>

        

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/products"
          >
            Start Shopping
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={RouterLink}
            to="/customize"
          > 
            Customize Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
  