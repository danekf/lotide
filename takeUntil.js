const takeUntil = function(array, callback) {
  let newArray = []; //initialize new array to be returned

  for (let item of array) { //look through each item of the array
    if (callback(item)) { //if we hit the condition, return the array we have so far
      return newArray;
    } else {
      newArray.push(item); //add item to new array
    }
  }

  return newArray; //if we made it through every item without hitting the condition, return the array
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//[ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
