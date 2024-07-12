import { products } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );
  return new Response(JSON.stringify({ product }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
