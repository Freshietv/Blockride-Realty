export function currency(value, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits
  }).format(value);
}

export function percent(value) {
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}
