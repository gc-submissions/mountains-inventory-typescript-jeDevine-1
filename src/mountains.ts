export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallest = array.reduce((pv, cv) =>
    pv.height < cv.height ? (pv = cv) : pv
  );
  return tallest.name;
};
console.log(findNameOfTallestMountain(mountains));
