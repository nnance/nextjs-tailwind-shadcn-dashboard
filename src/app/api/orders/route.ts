import { Order } from "@/types/orders";
import { customers } from "../customers/route";

const orders: Order[] = [
  {
    id: 1,
    customer: customers[0],
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: 250.0,
  },
  {
    id: 2,
    customer: customers[1],
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: 150.0,
  },
  {
    id: 3,
    customer: customers[2],
    type: "Subscription",
    status: "Fulfilled",
    date: "2023-06-25",
    amount: 350.0,
  },
  {
    id: 4,
    customer: customers[3],
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
