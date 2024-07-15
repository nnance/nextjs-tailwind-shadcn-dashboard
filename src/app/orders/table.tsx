"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/types/orders";

import { useContext } from "react";
import { FilterContext, SelectedOrderContext } from "../providers";
import DateTime from "@/components/date-time";
import Currency from "@/components/currancy";

// return an order row
function OrderRow(order: Order) {
  const { customer, type, status, date, amount } = order;
  const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderContext);

  return (
    <TableRow onClick={() => setSelectedOrder(order)}>
      <TableCell>
        <div className="font-medium">{customer?.name}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {customer?.email}
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{type}</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          {status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <DateTime date={date} />
      </TableCell>
      <TableCell className="text-right">
        <Currency value={amount} />
      </TableCell>
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
  const store = useContext(FilterContext);

  return (
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
      <OrderRows orders={orders} filter={store[0]} />
    </Table>
  );
}
