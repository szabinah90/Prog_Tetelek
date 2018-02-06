// FEB. 05.
// PROGRAMOZÁSI TÉTELEK
// VI. KIVÁLOGATÁS

let fromArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const choose = () => {
  let i = 0;
  let j = 0;
  let toArray = [];

  for (i; i < fromArray.length; i++) {
    if ((fromArray[i] % 2) === 0) { // kiválogatjuk azokat a számokat, melyeek párosak.
      toArray[j] = fromArray[i]; // a páros számokat beletölti a toArray tömbbe.
      j += 1;
    }
  }
  return toArray;
};

console.log(choose(fromArray));
