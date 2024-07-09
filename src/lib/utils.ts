import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedPrice = (price: number) => {
  const locale = "en-US"; // Example locale, adjust based on your requirements
  const currency = "USD"; // Example currency, adjust based on your requirements

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};
