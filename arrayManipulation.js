function processArray(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
      if (currentNumber % 2 === 0) {
        newArray.push(currentNumber * currentNumber);
      } else {
        newArray.push(currentNumber * currentNumber * currentNumber);
      }
    }
  
    return newArray;
  }
  
  
  const originalArray = [1, 4, 5, 8, 9];
  const modifiedArray = processArray(originalArray);
  console.log(originalArray); 
  console.log(modifiedArray);


  function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
      const num = processedNumbers[index];
      if (num % 2 === 0) {
        // Even number: capitalize the string
        return str.toUpperCase();
      } else {
        // Odd number: convert the string to lowercase
        return str.toLowerCase();
      }
    });
  }
  
  module.exports = {
    processArray,
    formatArrayStrings,
  };
  