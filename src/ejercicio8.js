const isOrderedAlphabetically = (someString, reverseOrder) => {
    const someArray = someString.split("")
    const someArrayAZ = someArray.sort()

    if (reverseOrder == false) {
        return someArrayAZ.join("") === someArray.join("");
        } else {
        let someArrayReverse = someArray.reverse().map(item => item)
        console.log(someArrayReverse)
        let someArrayReverseZA = someArrayReverse.sort()
        console.log(someArrayReverseZA)
        return someArrayReverse.join("") === someArrayReverseZA.join("")
        }
    }

console.log(isOrderedAlphabetically("abbcd", false)) // true
console.log(isOrderedAlphabetically("jheca", true)) // true
console.log(isOrderedAlphabetically("abbcddeikl", true)) //false