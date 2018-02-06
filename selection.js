// FEB 06.
// PROGRAMOZÁSI TÉTELEK
// IV. KIVÁLASZTÁS (gyakorlatilag ugyanaz, mint az eldöntés, csak ki kell íratni az adott elem indexét.)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [78, 26, 5, 9, 665, 574, 82, 41, 556];

// SAJÁT
const selection = (array, s) => {
  let i = 0;
  while (i < array.length && array[i] !== s) {
    i++;
  }
  if (i < array.length) {
    return 'Contains, its index is: ' + (i + 1); // mert az indexelés 0-ról kezdődik, ezért egyet hozzá kell adni.
  } else {
    return 'Does not contain';
  }
};

console.log(selection(array, 3));
console.log(selection(array2, 665));
console.log(selection(array, 145));

// TASI PDF:
let j = 0;
let keresett = 7;
let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while (j < tomb.length && tomb[j] !== keresett) {
  j += 1;
}
if (j < tomb.length) {
  console.log('van ilyen, a ', j + 1, '. elem'); // ha: +-jellel fűzöm össze, akkor j+1-t zárójelbe kell tenni!
} else {
  console.log('nincs ilyen');
}
