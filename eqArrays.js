
const assertEqualArray = function(actual, expected) {
  //check array length to see if they match, if they do compare them
  //if they are not the same length, immediately go false
  //this is used for each check case
  actual.length === expected.length ? null : assertionResult(actual, expected, false); 
  
  for (i = 0 ; i < actual.length ; i++){
    actual[i] === expected[i] ? null : assertionResult(actual, expected, false);
  }
  assertionResult(actual, expected, true); //if all checks pass, report they are identical
 
};


//prints result of equal test
const assertionResult = function(actual, expected, result){
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
}

assertEqualArray("Hello", "Hello");