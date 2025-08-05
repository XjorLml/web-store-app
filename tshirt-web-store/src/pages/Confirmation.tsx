import { Box, Typography, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Confirmation() {
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
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 2,
            boxShadow: 10,
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main' }} />

          <Typography variant="h4" fontWeight="bold" color="success.main">
            Thank you for your order!
          </Typography>

          <Typography variant="body1" color="text.secondary">
            You’ll receive an email with shipping details shortly.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
