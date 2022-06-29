const arrayValidator = function(actual, expected) {
    
  //check each equivalent item, if any of them are not identical, return that result
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
 
};


//prints result of equal test
const assertEqualArray = function(actual, expected) {
  let result = '';

  //check array length to see if they match, if they do compare them
  //if they are not the same length, immediately go false
  //this is used for each check case
  actual.length === expected.length ? result = arrayValidator(actual, expected) : result === false;
  
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const flatten = function(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++)
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  
  console.log(newArray);
};



flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
