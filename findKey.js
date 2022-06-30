//takes in an object and a callback, return first key from the object that has a value

const findKey = function(object, condition) {
  let result = '';

  for (let key in object) {
    if (condition(object[key])) {
      return key;
    }
  }

  return result;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
