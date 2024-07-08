import { ProductAPIResponse } from "@/types/products";
import ProductsBody from "./body";

export default async function Products() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const { products } = (await res.json()) as ProductAPIResponse;

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <ProductsBody products={products} />
    </main>
  );
}
