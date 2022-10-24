export interface Product {
  name: string;
  price: number;
}

let products = [
  { name: "shampoo", price: 10 },
  { name: "toothbrush", price: 2 },
  { name: "towel", price: 8 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length) {
    return array.reduce((pv, cv) => (pv += cv.price), 0) / array.length;
  } else {
    return 0;
  }
};

console.log(calcAverageProductPrice(products));
