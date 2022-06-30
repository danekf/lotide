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

//map function
const map = (array, callback) => {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

console.log(results1);





