// FEB 05. 
// PROGRAMOZÁSI TÉTELEK
// II. MEGSZÁMLÁLÁS (itt most a pozitívok számát iratjuk ki)

// Saját megoldás (de hasonló a "minta" is, kiv: "if(array[i] > 3)" )
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [78, 26, 5, 97, 665, 574, 82, 41, 556];

const counting = (array) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] % 2 == 0) {
      counter += 1;
    }
  }
  return counter;
};

console.log(counting(array));
console.log(counting(array2));
