"use client";

import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { FilterContext } from "./providers";

const FilterItem = ({
  value,
  store,
}: {
  value: string;
  store: [string, React.Dispatch<React.SetStateAction<string>>];
}) => {
  const [filter, setFilter] = store;

  return (
    <DropdownMenuCheckboxItem
      onClick={() => setFilter(value)}
      checked={filter === value}
    >
      {value}
    </DropdownMenuCheckboxItem>
  );
};

export function FilterDropdown() {
  const store = useContext(FilterContext);

  return (
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
        <FilterItem value="All" store={store} />
        <FilterItem value="Fulfilled" store={store} />
        <FilterItem value="Declined" store={store} />
        <FilterItem value="Refunded" store={store} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
