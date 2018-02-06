// FEB 05.
// PROGRAMOZÁSI TÉTELEK (alapvető problémákat vetnek fel, melyeknek a legalapvetőbb megoldását tartalmazzák)

// I. ÖSSZEGZÉS TÉTELE
// Meg kell állapítani a tömbökben lévő számok összegét.

// Saját megoldás (és ez a "minta" megoldás is)
let array = [1, 2, 3, 4, 5];
let array2 = [-23, 15, 44, 9, 12];

const summary = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    sum += array[i];
  }
  return sum;
};

console.log(summary(array));
console.log(summary(array2));
