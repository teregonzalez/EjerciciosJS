const isOrderedAlphabetically = (someString, reverseOrder) => {
    const someArray = someString.split("")
    const someArrayAZ = someArray.sort()

    if(!reverseOrder){
        return someArray.join("") === someArrayAZ.join("")
    }
    else{
        let someStringReversed = someString.split("").reverse().map(item => item)
        let someStringReversedAZ = someStringReversed.sort()
        console.log(someStringReversed.join(""), someString)
        return someStringReversed.join("") === someStringReversedAZ.join("")
        
    }
}

console.log(isOrderedAlphabetically("abbcddeikl", true)) // true
//console.log(isOrderedAlphabetically("dcba", true)) //true
//console.log(isOrderedAlphabetically("jheca", false)) // false