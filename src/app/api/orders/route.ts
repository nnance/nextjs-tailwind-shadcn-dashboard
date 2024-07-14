import { Order, OrderJSON } from "@/types/orders";
import customers from "@/data/customers.json";
import orderJson from "@/data/orders.json";

export async function GET() {
  const json = orderJson as OrderJSON[];
  const orders: Order[] = json.map((order) => {
    return {
      ...order,
      date: new Date(order.date).toISOString(),
      customer: customers.find((customer) => customer.id === order.customerId),
    };
  });
  return new Response(JSON.stringify({ orders }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
