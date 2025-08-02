import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';

export default function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const order = {
      customerName: name,
      shippingAddress: address,
      items: [
        {
          productId: 1,
          quantity: 1,
        },
      ],
    };

    try {
      await axios.post('http://localhost:5286/api/order', order);
      navigate('/confirmation');
    } catch (error) {
      alert('Order failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Checkout
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Shipping Address"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Place Order
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
