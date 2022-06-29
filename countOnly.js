//counts isntances of an item, within an object
const countOnly = function(allItems, itemsToCount){
  const countObj ={
  };

    //loop through each item in our allItems
    for (let item of allItems) {
      if(itemsToCount[item]){
        if (!countObj[item]){
          countObj[item] = 1;
        }
        else {
          countObj[item] += 1;
        }
      }    
    }
    return countObj;
}

//asserts that test is running as expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

