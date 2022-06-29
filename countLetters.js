const countLetter = function(string, search){
  const letterCountObj ={
  };

  //create new key with each letter in the search
  for (let letter of search){
    letterCountObj[letter] = 0; 
  }  

  //search each key in our letter counter, search each key within the string and increase if they match
  for (let key in letterCountObj){
    for (let letter in string) {
      if (key === string[letter]){
        letterCountObj[key]++;
      }
    }
  }


 

return letterCountObj;
}

const message = "aaa llll a l" 


console.log(countLetter(message, "ala"));