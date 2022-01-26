const isOrderedAlphabetically = (someString, reverseOrder) => {
    const someArray = someString.split("")
    const someArrayAZ = someArray.sort()
    console.log(someArrayAZ)
    const someArrayReverse = someArray.reverse()
    console.log(someArrayReverse)

    if((reverseOrder === false && someArray === someArrayAZ) || 
    (reverseOrder === true  && someArrayReverse === someArrayAZ) ){
            return true
        }else{
            return false
        }
    }

console.log(isOrderedAlphabetically("abbcd", false)) // true
console.log(isOrderedAlphabetically("jheca", true)) // true
console.log(isOrderedAlphabetically("abbcddeikl", true)) //false