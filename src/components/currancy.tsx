export default function Currency({ value }: { value: number }) {
  const locale = "en-US"; // Example locale, adjust based on your requirements
  const currency = "USD"; // Example currency, adjust based on your requirements

  return (
    <div>
      {new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(value)}
    </div>
  );
}
