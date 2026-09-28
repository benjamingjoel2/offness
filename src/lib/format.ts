const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export function formatGbp(amount: number): string {
  return gbp.format(amount);
}

export function formatNights(nights: number): string {
  return `${nights} ${nights === 1 ? "night" : "nights"}`;
}
