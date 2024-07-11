import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Customer, CustomerAPIResponse } from "@/types/customers";

function CustomerRow({
  name,
  email,
  phone,
  address,
  city,
  state,
  zip,
}: Customer) {
  return (
    <TableRow>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="font-medium">{email}</TableCell>
      <TableCell className="hidden md:table-cell">{phone}</TableCell>
      <TableCell className="hidden md:table-cell">{`${address}/n${city}, ${state} ${zip}`}</TableCell>
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

function CustomerRows({ customers }: { customers: Customer[] }) {
  const productRows = customers.map((customer) => (
    <CustomerRow key={customer.id} {...customer} />
  ));

  return <TableBody>{productRows}</TableBody>;
}

function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
          <TableHead className="hidden md:table-cell">Address</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <CustomerRows customers={customers} />
    </Table>
  );
}

export default async function CustomersPage() {
  const res = await fetch(`http://localhost:3000/api/customers`, {
    cache: "no-store",
  });
  const { customers } = (await res.json()) as CustomerAPIResponse;

  return (
    <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            View all customers and their orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomerTable customers={customers} />
        </CardContent>
      </Card>
    </main>
  );
}
