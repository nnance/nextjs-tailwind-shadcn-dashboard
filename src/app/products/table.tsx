"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useContext } from "react";
import { Product } from "@/types/products";
import { FilterContext } from "../providers";
import { useRouter } from "next/navigation";
import DateTime from "@/components/date-time";
import Currency from "@/components/currancy";

function ProductRow({
  id,
  name,
  status,
  image,
  price,
  quantity,
  createdAt,
}: Product) {
  const router = useRouter();
  return (
    <TableRow onClick={() => router.push(`/products/details/?id=${id}`)}>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={image}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{status}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Currency value={price} />
      </TableCell>
      <TableCell className="hidden md:table-cell">{quantity}</TableCell>
      <TableCell className="hidden md:table-cell">
        <DateTime date={createdAt} />
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

function ProductRows({ products }: { products: Product[] }) {
  const productRows = products.map((product) => (
    <ProductRow key={product.id} {...product} />
  ));

  return <TableBody>{productRows}</TableBody>;
}

export function ProductTable({ products }: { products: Product[] }) {
  const [filter] = useContext(FilterContext);
  const filteredProducts = products.filter(
    (product) => filter === "All" || product.status === filter
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Price</TableHead>
          <TableHead className="hidden md:table-cell">Total Sales</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <ProductRows products={filteredProducts} />
    </Table>
  );
}
