"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Order } from "@/types/orders";

export const SelectedOrderContext = createContext<
  ReturnType<typeof useState<Order | undefined>>
>([undefined, () => {}]);

export const SelectedOrderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const store = useState<Order | undefined>(undefined);

  return (
    <SelectedOrderContext.Provider value={store}>
      {children}
    </SelectedOrderContext.Provider>
  );
};

export const FilterContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["All", () => {}]);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useState<string>("All");
  return (
    <FilterContext.Provider value={store}>{children}</FilterContext.Provider>
  );
};
