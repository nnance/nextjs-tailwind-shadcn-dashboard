import customers from "@/data/customers.json";

export async function GET() {
  return new Response(JSON.stringify({ customers }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
