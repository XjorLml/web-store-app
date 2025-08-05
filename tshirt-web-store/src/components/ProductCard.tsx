import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea component={Link} to={`/products/${product.id}`}>
        <Box
          sx={{
            height: 240,
            bgcolor: "#fafafa",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={product.imageUrl}
            alt={product.name || "Product"}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" noWrap>
            {product.name}
          </Typography>
          <Typography variant="subtitle2" color="success.main" fontWeight="600">
            ₱{typeof product.price === "number" ? product.price.toFixed(2) : "0.00"}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
        <Button
          component={Link}
          to={`/products/${product.id}`}
          size="small"
          variant="outlined"
          color="warning"
        >
          View Details →
        </Button>
      </CardActions>
    </Card>
  );
}
