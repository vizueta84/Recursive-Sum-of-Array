let x = 0;
// Needs to be a function

const callMyself = () => {
  x++;
  //   Needs conditions to return
  if (x > 9) return;
  // Needs to call itself
  callMyself();

  return x;
};

callMyself();

// Write a recursive JavaScript program to compute the sum of an array of integers.

const array1 = [1, 2, 3, 4, 5, 6];
let currentNum = 0;
const sumArr = (array) => {
  console.log("currentNum before adding", currentNum);
  console.log("array[0]", array[0]);
  //   redifine current num and adding first element in the array.
  currentNum = currentNum + array[0];
  console.log("currentNum after adding", currentNum);
  // remove first element from array.
  array.shift();
  // if the array is empty return current number
  if (array.length === 0) {
    return currentNum;
  }

  console.log("array", array);

  sumArr(array);
};
sumArr(array1);

// => Expected Output : 21
