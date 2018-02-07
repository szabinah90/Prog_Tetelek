// FEB 07.
// Programozási tételek
// VII. SZÉTVÁLOGATÁS

let j = 0;
let k = 0;

let fromArray = [0, -3, 6, -77, 18, 12, 88, -13, -55, 2, 67, -56];

const szetvalogatas = (array) => {
  let posArray = [];
  let negArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      posArray[j] = array[i];
      j++;
    } else {
      negArray[k] = array[i];
      k++;
    }
  }
  let object = {positive: posArray, negative: negArray};
  return object;
};

console.log(szetvalogatas(fromArray));
