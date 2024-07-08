export interface Product {
  id: number;
  name: string;
  status: string;
  image: string;
  price: number;
  quantity: number;
  createdAt: string;
}

export interface ProductAPIResponse {
  products: Product[];
}
