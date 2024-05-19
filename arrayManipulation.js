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