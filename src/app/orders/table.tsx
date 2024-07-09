"use client";

import { File, ListFilter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
import { Order } from "@/types/orders";

import { useContext, useState } from "react";
import { SelectedContext } from "./providers";

// return an order row
function OrderRow(order: Order) {
  const { customer, type, status, date, amount } = order;
  const { setSelectedData } = useContext(SelectedContext);

  return (
    <TableRow onClick={() => setSelectedData(order)}>
      <TableCell>
        <div className="font-medium">{customer.name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {customer.email}
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{type}</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          {status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{date}</TableCell>
      <TableCell className="text-right">{amount.toFixed(2)}</TableCell>
    </TableRow>
  );
}

// loop through the orders and return the order rows
function OrderRows({ orders, filter }: { orders: Order[]; filter: string }) {
  const allOrders = [...orders, ...orders];

  const filteredOrders = allOrders.filter(
    (order) =>
      filter.toLowerCase() === "all" ||
      order.status.toLowerCase() === filter.toLowerCase()
  );

  const orderRows = filteredOrders.map((order, idx) => {
    const amount =
      order.items.reduce((total, item) => total + item.price, 0) + 30;
    return <OrderRow key={idx} {...order} amount={amount} />;
  });

  return <TableBody>{orderRows}</TableBody>;
}

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const [selectedOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState("fulfilled");

  const FilterItem = ({ value }: { value: string }) => (
    <DropdownMenuCheckboxItem
      onClick={() => setFilter(value)}
      checked={filter === value}
    >
      {value}
    </DropdownMenuCheckboxItem>
  );

  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <FilterItem value="All" />
              <FilterItem value="Fulfilled" />
              <FilterItem value="Declined" />
              <FilterItem value="Refunded" />
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="week">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Type</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <OrderRows orders={orders} filter={filter} />
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
