let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  arr
    .filter((Element) => {
      return Element % 2 == 0;
    })
    .map((Element) => {
      return Element * 2;
    })
);

console.log(
  arr.reduce((Element, acc) => {
    return Element + acc;
  }, 0)
);
