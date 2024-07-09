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
    items: [
      { id: 1, name: "Glimmer Lamps", quantity: 2, price: 125.0 },
      { id: 2, name: "Aqua Filters", quantity: 1, price: 49.0 },
    ],
  },
  {
    id: 2,
    customer: customers[1],
    type: "Refund",
    status: "Declined",
    date: "2023-06-24",
    amount: 150.0,
    items: [
      { id: 3, name: "Laser Lemonade Machine", quantity: 1, price: 150.0 },
      { id: 4, name: "Hypernova Headphones", quantity: 1, price: 350.0 },
    ],
  },
  {
    id: 3,
    customer: customers[2],
    type: "Subscription",
    status: "Fulfilled",
    date: "2023-06-25",
    amount: 350.0,
    items: [{ id: 4, name: "Hypernova Headphones", quantity: 1, price: 350.0 }],
  },
  {
    id: 4,
    customer: customers[3],
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-26",
    amount: 450.0,
    items: [
      { id: 5, name: "AeroGlow Desk Lamp", quantity: 1, price: 450.0 },
      { id: 2, name: "Aqua Filters", quantity: 1, price: 49.0 },
    ],
  },
];

export async function GET() {
  return new Response(JSON.stringify({ orders }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
