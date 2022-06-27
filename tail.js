//tail clone
const tail = function(array) {
  let tailArray = array.slice(1); //remove entry 0 from the array and return a new array
  return tailArray;
};

//head clone
const head = function(array) {
  return array[0];//return first value in the array given
};

//console.assert clone
const assertEqual = function(actual, expected) {
   
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
  
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!