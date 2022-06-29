const letterPositions = function(sentence) {
  const results = {};
  console.log(sentence);

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) { //if doesnt already exist in results, create it
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }

  }
  

  return results;
};

const message = "lighthouse in the house";

console.log(letterPositions(message));