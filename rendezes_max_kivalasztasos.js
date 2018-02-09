let array = [34, 56, 7, 8, 1, 4, 13];

const rendezMaxKiv = () => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[max]) {
        max = j;
      }
    }
    if (max !== i) {
      let temp = array[i];
      array[i] = array[max];
      array[max] = temp;
    }
  }
  return array;
};

console.log(rendezMaxKiv(array));
