import { Product } from "@/types/products";

const products: Product[] = [
  {
    id: 1,
    name: "Laser Lemonade Machine",
    status: "Draft",
    image: "/placeholder.svg",
    price: 499.99,
    quantity: 25,
    createdAt: new Date("2023-07-12 10:42 AM").toISOString(),
  },
  {
    id: 2,
    name: "Hypernova Headphones",
    status: "Active",
    image: "/placeholder.svg",
    price: 129.99,
    quantity: 100,
    createdAt: new Date("2023-10-18 03:21 PM").toISOString(),
  },
  {
    id: 3,
    name: "AeroGlow Desk Lamp",
    status: "Active",
    image: "/placeholder.svg",
    price: 39.99,
    quantity: 50,
    createdAt: new Date("2023-11-29 08:15 AM").toISOString(),
  },
  {
    id: 4,
    name: "TechTonic Energy Drink",
    status: "Draft",
    image: "/placeholder.svg",
    price: 2.99,
    quantity: 0,
    createdAt: new Date("2023-12-25 11:59 PM").toISOString(),
  },
  {
    id: 5,
    name: "Gamer Gear Pro Controller",
    status: "Active",
    image: "/placeholder.svg",
    price: 59.99,
    quantity: 75,
    createdAt: new Date("2024-01-01 12:00 AM").toISOString(),
  },
  {
    id: 6,
    name: "Luminous VR Headset",
    status: "Active",
    image: "/placeholder.svg",
    price: 199.99,
    quantity: 30,
    createdAt: new Date("2024-02-14 02:14 PM").toISOString(),
  },
];

export async function GET() {
  return new Response(JSON.stringify({ products }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
