const findDuplicates = (someString, repeatTimes) => {
    const letterArray = someString.split("")
    const newArray = []

    for (let i = 0; i < letterArray.length - 1; i++) {
        let contador = 1;
        for (let j = i + 1; j < letterArray.length; j++) {
          if (letterArray[i] === letterArray[j]) {
            contador++;
          }
        }
        if (repeatTimes === contador) {
          newArray.push(letterArray[i]);
        }
      }
    
      return newArray;
    };
    
    console.log(findDuplicates("abcddef", 2)); // [d]
    console.log(findDuplicates("tfghhhplffzaaa", 3)); // [f ,h, a]