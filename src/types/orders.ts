import { Customer } from "./customers";

export interface Order {
  id: number;
  customer: Customer;
  type: string;
  status: string;
  date: string;
  amount: number;
}

export interface OrdersAPIResponse {
  orders: Order[];
}
