import { Order } from "@/types/orders";

const orders: Order[] = [
  {
    id: 1,
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: 250.0,
  },
  {
    id: 2,
    customer: "Olivia Smith",
    email: "olivia@example.com",
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: 150.0,
  },
  {
    id: 3,
    customer: "Noah Williams",
    email: "noah@example.com",
    type: "Subscription",
    status: "Fulfilled",
    date: "2023-06-25",
    amount: 350.0,
  },
  {
    id: 4,
    customer: "Emma Brown",
    email: "emma@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-26",
    amount: 450.0,
  },
];

export async function GET() {
  return new Response(JSON.stringify({ orders }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
