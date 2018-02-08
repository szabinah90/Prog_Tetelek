// FEB 08.
// PROGRAMOZÁSI TÉTELEK
// VIII. METSZET

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 3, 5, 9, 22, 7, 13, 8];

const union = (a, b) => {
  let k = 0;
  let i = 0;
  let j;
  let c = [];

  for (i; i < a.length; i++) {
    j = 0;
    while (j < b.length && b[j] !== a[i]) {
      j++;
    }
    if (j < b.length) {
      c[k] = a[i];
      k++;
    }
  }
  return c;
};

console.log(union(array1, array2));
