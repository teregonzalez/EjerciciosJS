const removeCharacters = (someString, charactersToRemove) => {
    let newString=[]
    for(let i=0; i<someString.length; i++){
            if(charactersToRemove.includes(someString[i]) === false){
                newString.push(someString[i])
            }
    }
    return newString.join("")
    }


console.log(removeCharacters("I am an example string", ["a", "x"]))
// I m n emple string