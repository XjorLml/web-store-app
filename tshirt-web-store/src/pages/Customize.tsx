import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Button,
  Paper,
} from '@mui/material';

export default function Customize() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [textPosition, setTextPosition] = useState<'top' | 'center' | 'bottom'>('center');

  const handleAddToCart = () => {
    console.log(`Customized product ${id}`);
    console.log(`Text: ${customText}`);
    console.log(`Color: ${textColor}`);
    console.log(`Position: ${textPosition}`);
    navigate('/checkout');
  };

  const getTextPositionStyles = () => {
    switch (textPosition) {
      case 'top':
        return { top: '16px' };
      case 'bottom':
        return { bottom: '16px' };
      default:
        return { top: '50%', transform: 'translateY(-50%)' };
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="text.primary" mb={6}>
        Customize Your T-Shirt
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
        gap={6}
        alignItems="flex-start"
      >
        {/* Preview */}
        <Paper
          elevation={3}
          sx={{
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            p: 3,
            bgcolor: '#f3f4f6',
            borderRadius: 4,
          }}
        >
          <Box
            component="img"
            src="https://via.placeholder.com/300x300?text=T-Shirt+Preview"
            alt="T-Shirt Preview"
            sx={{ maxHeight: '100%', objectFit: 'contain' }}
          />
          {customText && (
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                color: textColor,
                ...getTextPositionStyles(),
              }}
            >
              {customText}
            </Typography>
          )}
        </Paper>

        {/* Form */}
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Custom Text"
            variant="outlined"
            fullWidth
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="e.g., Your Name or Quote"
          />

          <Box>
            <InputLabel shrink htmlFor="textColor">Text Color</InputLabel>
            <input
              id="textColor"
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              style={{
                width: '60px',
                height: '40px',
                padding: '4px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            />
          </Box>

          <FormControl fullWidth>
            <InputLabel id="text-position-label">Text Position</InputLabel>
            <Select
              labelId="text-position-label"
              value={textPosition}
              label="Text Position"
              onChange={(e) => setTextPosition(e.target.value as 'top' | 'center' | 'bottom')}
            >
              <MenuItem value="top">Top</MenuItem>
              <MenuItem value="center">Center</MenuItem>
              <MenuItem value="bottom">Bottom</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleAddToCart}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
