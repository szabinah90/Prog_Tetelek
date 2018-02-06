// FEB 05.
// PROGRAMOZÁSI TÉTELEK
// III. ELDÖNTÉS

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [78, 26, 5, 9, 665, 574, 82, 41, 556];

// WHILE
const decision = (array, s) => {
  let i = 0;
  while (i < array.length && array[i] !== s) {
    i++;
  }
  if (i < array.length) {
    return 'Contains';
  } else {
    return 'Does not contain';
  }
};

console.log(decision(array, 856));
console.log(decision(array2, 9));

/*
// FOR (ez nem kellett, mert "nem takarékos", csak buzgó voltam...)
const forDecision = (array, s2) => {
    let j = 0;
    // let s2 = 10;
    for (j; j < array.length; j++) {
        if (array[j] == s2) { break; }
    }

    if (array[j] <= array.length) {
        return "Contains"
    } else {
        return "Does not contain"
    }
}

console.log(forDecision(array, 2));
*/
