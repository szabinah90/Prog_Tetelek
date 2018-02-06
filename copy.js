// FEB 05.
// PROGRAMOZÁSI TÉTELEK
// V. MÁSOLÁS

let i;
let fromArray = [7, 8, 9, 10, 11];

const copy = () => {
  let toArray = [];
  for (i = 0; i < fromArray.length; i++) {
    toArray[i] = fromArray[i] * 2;
  }
  return toArray;
};

let result = copy(fromArray);
console.log(result);
