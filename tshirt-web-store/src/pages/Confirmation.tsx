import { Box, Typography, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Confirmation() {
  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main' }} />

        <Typography variant="h4" fontWeight="bold" color="success.main">
          Thank you for your order!
        </Typography>

        <Typography variant="body1" color="text.secondary">
          You’ll receive an email with shipping details shortly.
        </Typography>
      </Box>
    </Container>
  );
}
