import { OrdersAPIResponse } from "@/types/orders";
import OrdersBody from "./body";

export default async function Orders() {
  const res = await fetch(`http://localhost:3000/api/orders`);
  const { orders } = (await res.json()) as OrdersAPIResponse;

  return <OrdersBody orders={orders} />;
}
