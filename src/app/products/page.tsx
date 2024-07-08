import { ProductAPIResponse } from "@/types/products";
import ProductsBody from "./body";

export default async function Products() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const { products } = (await res.json()) as ProductAPIResponse;

  return <ProductsBody products={products} />;
}
