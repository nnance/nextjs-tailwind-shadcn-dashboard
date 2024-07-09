"use client";

import { Order } from "@/types/orders";
import { createContext, useState } from "react";

interface SelectedOrderContext {
  selectedData: Order | undefined;
  setSelectedData: (data: Order) => void;
}

export const SelectedContext = createContext<SelectedOrderContext>({
  selectedData: undefined,
  setSelectedData: () => {},
});

export const SelectedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Define your initial state and any functions for updating it
  const [selectedData, setSelectedData] = useState<Order | undefined>(
    undefined
  );

  return (
    <SelectedContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </SelectedContext.Provider>
  );
};
