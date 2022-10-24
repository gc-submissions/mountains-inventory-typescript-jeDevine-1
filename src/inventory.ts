import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let total: number = 0;
  array.forEach((item) => (total += item.quantity * item.product.price));
  return total;
};
console.log(calcInventoryValue(inventory));
