export interface Order {
  id: number;
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: number;
}

export interface OrdersAPIResponse {
  orders: Order[];
}
