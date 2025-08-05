import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import type { Product } from '../api/product';

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get passed state from Customize page
  const {
    product,
    customText,
    textColor,
    textPosition,
  }: {
    product: Product;
    customText: string;
    textColor: string;
    textPosition: string;
  } = location.state || {};

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async () => {
    if (!product) {
      alert('Missing product information.');
      return;
    }

    const paymentDetails =
      paymentMethod === 'Card'
        ? {
            method: 'Card',
            cardNumber,
            cardHolder,
            expiryDate,
            cvv,
          }
        : {
            method: 'COD',
          };

    const order = {
      customerName: name,
      shippingAddress: address,
      payment: paymentDetails,
      items: [
        {
          productId: product.id,
          quantity: 1,
          customText,
          textColor,
          textPosition,
        },
      ],
    };

    try {
      await axios.post('http://localhost:5286/api/order', order);
      navigate('/confirmation', { state: { order } });
    } catch (error) {
      alert('Order failed');
    }
  };

  if (!product) {
    return (
      <Container maxWidth="sm" sx={{ py: 10 }}>
        <Typography variant="h6" color="error">
          No product selected. Please go back and customize your t-shirt.
        </Typography>
      </Container>
    );
  }

  return (
    <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
    }}>
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Checkout
        </Typography>

        {/* Product Preview */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: 'linear-gradient(to right, #ebf8ff, #fce7f3)',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Box position="relative" display="inline-block">
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ maxWidth: '100%', height: 200, objectFit: 'contain' }}
            />
            <Typography
              variant="h6"
              style={{
                position: 'absolute',
                top:
                  textPosition === 'top'
                    ? '10%'
                    : textPosition === 'center'
                    ? '45%'
                    : '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: textColor,
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              {customText}
            </Typography>
          </Box>
          <Typography mt={1}>{product.name}</Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Customer Info */}
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

          {/* Payment */}
          <FormControl fullWidth>
            <InputLabel>Payment Method</InputLabel>
            <Select
              value={paymentMethod}
              label="Payment Method"
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <MenuItem value="COD">Cash on Delivery</MenuItem>
              <MenuItem value="Card">Credit/Debit Card</MenuItem>
            </Select>
          </FormControl>

          {paymentMethod === 'Card' && (
            <>
              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <TextField
                label="Card Holder Name"
                variant="outlined"
                fullWidth
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
              <TextField
                label="Expiry Date (MM/YY)"
                variant="outlined"
                fullWidth
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </>
          )}

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
    </Box>
  );
}
