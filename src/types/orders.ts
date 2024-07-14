import { Customer } from "./customers";

export interface Order {
  id: number;
  customer?: Customer;
  type: string;
  status: string;
  date: string;
  amount: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface OrdersAPIResponse {
  orders: Order[];
}

export interface GetOrderResponse {
  order: Order;
}

export interface OrderJSON extends Omit<Order, "customer"> {
  customerId: number;
}
