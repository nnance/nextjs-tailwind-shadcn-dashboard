import { Customer } from "@/types/customers";

export const customers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-555-5555",
    address: "123 First St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-555-5555",
    address: "123 Second St",
    city: "Anytown",
    state: "OK",
    zip: "72345",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "555-555-5555",
    address: "123 Third St",
    city: "Anytown",
    state: "TX",
    zip: "52345",
  },
];

export async function GET() {
  return new Response(JSON.stringify({ customers }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
