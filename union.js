let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [1, 3, 5, 9, 22, 7, 13, 8];

const union = (a, b) => {
  let i;
  let j;
  let c = [];
  let k;

  for (i = 0; i < a.length; i++) {
    c[i] = a[i];
  }

  k = a.length;

  for (j = 0; j < b.length; j++) {
    i = 0;
    while (i < a.length && b[j] !== a[i]) {
      i++;
    }
    if (i >= a.length) {
      c[k] = b[j];
      k++;
    }
  }
  return c;
};

console.log(union(array1, array2));
