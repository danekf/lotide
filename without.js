//check array for equality
const arrayValidator = function(actual, expected) {
    
  //check each equivalent item, if any of them are not identical, return that result
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
 
};


//checks result of equal test for arrays
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

//removes items from source array and returns a filtered array
const without = function(source, itemsToRemove) {
  let filteredArray = source;
  
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < filteredArray.length; j++) {
      if (filteredArray[j] === itemsToRemove[i]) {
        filteredArray.splice(j, 1);
      }
    }
  }
  return filteredArray;
};


