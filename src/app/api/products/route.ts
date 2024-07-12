import { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Laser Lemonade Machine",
    description: "A refreshing drink for a hot day.",
    status: "Draft",
    image: "/placeholder.svg",
    price: 499.99,
    quantity: 25,
    createdAt: new Date("2023-07-12 10:42 AM").toISOString(),
  },
  {
    id: 2,
    name: "Hypernova Headphones",
    description: "Immerse yourself in sound.",
    status: "Active",
    image: "/placeholder.svg",
    price: 129.99,
    quantity: 100,
    createdAt: new Date("2023-10-18 03:21 PM").toISOString(),
  },
  {
    id: 3,
    name: "AeroGlow Desk Lamp",
    description: "Illuminate your workspace.",
    status: "Active",
    image: "/placeholder.svg",
    price: 39.99,
    quantity: 50,
    createdAt: new Date("2023-11-29 08:15 AM").toISOString(),
  },
  {
    id: 4,
    name: "TechTonic Energy Drink",
    description: "Stay energized all day long.",
    status: "Draft",
    image: "/placeholder.svg",
    price: 2.99,
    quantity: 0,
    createdAt: new Date("2023-12-25 11:59 PM").toISOString(),
  },
  {
    id: 5,
    name: "Gamer Gear Pro Controller",
    description: "The ultimate gaming accessory.",
    status: "Active",
    image: "/placeholder.svg",
    price: 59.99,
    quantity: 75,
    createdAt: new Date("2024-01-01 12:00 AM").toISOString(),
  },
  {
    id: 6,
    name: "Luminous VR Headset",
    description: "Experience virtual reality like never before.",
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
