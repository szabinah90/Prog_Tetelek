// FEB. 09.
// PROGRAMOZÁSI TÉTELEK
// BUBORÉKOS RENDEZÉS

let array = [34, 56, 7, 8, 1, 4, 13];
let array2 = [45, 7, 1, 78, 97, 113, 4, 2];
let array3 = [1243, 8896, 7546, 456, 1967, 2245, 5620];

const rendezBuborek = (a) => {
  for (let i = a.length - 1; i > 0; i--) { // így is lefut: let i = 0; i < a.length; i++
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a;
};

console.log(rendezBuborek(array));
console.log(rendezBuborek(array2));
console.log(rendezBuborek(array3));
