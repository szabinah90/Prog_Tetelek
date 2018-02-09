// FEB. 09.
// PROGRAMOZÁSI TÉTELEK
// MINIMUM KIVÁLASZTÁSOS RENDEZÉS

let array = [34, 56, 7, 8, 1, 4, 13];
let array2 = [45, 7, 1, 78, 97, 113, 4, 2];

const rendezMinKiv = (array) => {
  let min = 0;

  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

console.log(rendezMinKiv(array));
console.log(rendezMinKiv(array2));
