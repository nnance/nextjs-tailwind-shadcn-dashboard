import data from "@/data/products.json";

export async function GET() {
  const products = data.map((product) => ({
    ...product,
    createdAt: new Date(product.createdAt).toISOString(),
  }));
  return new Response(JSON.stringify({ products }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
