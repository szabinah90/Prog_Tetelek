let array = [2, 3, 5, 77, 45, 1, 0, 77, 13, 8, -1];
let array2 = [56, 889, 23, 556, -3, 66, -34, 2];

const minKivalasztas = (a) => {
  let min = a[0];
  let i;

  for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
  }
  return min;
};

console.log(minKivalasztas(array));
console.log(minKivalasztas(array2));
