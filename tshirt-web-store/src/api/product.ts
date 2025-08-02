// src/api/products.ts
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export async function getAllProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>('http://localhost:5286/api/product');
  return response.data;
}
