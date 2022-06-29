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
    return true;
  } else {
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = true; //set primary equality at true and set to false anytime a check fails

  if (Object.keys(object1).length === Object.keys(object2).length) { //check length
    for (let objKey in object1) { //compare keys
      if (Array.isArray(object1[objKey])) { //if the current key is an array, compare arrays
        let test = assertEqualArray(object1[objKey], object2[objKey]);
        test ? null : result = false; //if the arrays are not equal, result becomes false
      } else if (object1[objKey] !== object2[objKey]) //if they are not equal values, indicate false
        result = false;
    }
  } else {
    result = false;
  }
  console.log(result);
  return result; //return result of the test
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
