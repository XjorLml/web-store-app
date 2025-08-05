// src/api/products.ts
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const API_BASE = 'http://localhost:5286/api/product';

export async function getAllProducts(): Promise<Product[]> {
  const response = await axios.get(API_BASE);
  console.log('Fetched products:', response.data.data);
  return response.data.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await axios.get<{ message: string; data: Product }>(`${API_BASE}/${id}`);
  return response.data.data;
}




