import axios from 'axios';

export interface OrderItem {
  productId: number;
  quantity: number;
  customText?: string;
  textColor?: string;
  textPosition?: string;
}

export interface PaymentDetails {
  method: 'COD' | 'Card';
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface Order {
  customerName: string;
  shippingAddress: string;
  payment: PaymentDetails;
  items: OrderItem[];
}

const API_BASE = 'http://localhost:5286/api/order';

export async function createOrder(order: Order): Promise<void> {
  await axios.post(API_BASE, order);
  console.log('Order created successfully');
}
