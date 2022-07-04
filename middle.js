const middle = function(array) {

  let length = array.length;


  if (length <= 2) { //if array is 2 or less, there is no middle, return the blank array
    return [];
  } else if (length % 2 !== 0) { //odd, return 1
    let midPoint = Math.floor(length / 2); //take length, divide by two and return the value at this point
    return array[midPoint];
  } else {
    let midPoint = (length / 2) - 1; //even, return 2
    return array.slice(midPoint, midPoint + 2); //take 2 mid points

  }
};

module.exports = middle;