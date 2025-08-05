import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";
import { getProductById } from "../api/product";
import type { Product } from "../api/product";

const Customize = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [customText, setCustomText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textPosition, setTextPosition] = useState("center");

  useEffect(() => {
    if (id) {
      getProductById(Number(id)).then(setProduct);
    }
  }, [id]);

  const handleProceed = () => {
    // Save customization or pass it to the next page
    navigate("/checkout", {
      state: {
        product,
        customText,
        textColor,
        textPosition,
      },
    });
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    

      <Box
        sx={{
          background: 'linear-gradient(to right, #ebf8ff, #fce7f3)', 
          minHeight: '100vh',
          p: { xs: 3, md: 5 },
          boxShadow: 10,    
        }}
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={6}
        alignItems="center"
      >
        {/* T-shirt preview */}
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            borderRadius: 4,
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Box position="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ maxHeight: 450, objectFit: "contain" }}
            />
            <Typography
              variant="h6"
              style={{
                position: "absolute",
                top:
                  textPosition === "top"
                    ? "15%"
                    : textPosition === "center"
                      ? "45%"
                      : "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: textColor,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {customText}
            </Typography>
          </Box>
        </Box>

        {/* Customization controls */}
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Custom Text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            fullWidth
            variant="outlined"
          />

          <TextField
            type="color"
            label="Text Color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth>
            <InputLabel id="position-label">Text Position</InputLabel>
            <Select
              labelId="position-label"
              value={textPosition}
              label="Text Position"
              onChange={(e) => setTextPosition(e.target.value)}
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
            onClick={handleProceed}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>

  );
};

export default Customize;
