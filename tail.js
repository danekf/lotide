
//tail clone
const tail = function(array) {
  let tailArray = array.slice(1); //remove entry 0 from the array and return a new array
  return tailArray;
};

// //head clone
// const head = function(array) {
//   return array[0];//return first value in the array given
// };

module.exports = tail;