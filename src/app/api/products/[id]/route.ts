import products from "@/data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const selected = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (!selected) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  const product = {
    ...selected,
    createdAt: new Date(selected.createdAt).toISOString(),
  };
  return new Response(JSON.stringify({ product }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
