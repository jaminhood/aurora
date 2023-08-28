export const usePriceFormat = (price: number) => {
 const converted = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
 }).format(price)

 return [converted]
}
