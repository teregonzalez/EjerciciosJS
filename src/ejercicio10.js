//Search for a string within a string
const stringContains = (someString, stringToSearchFor) => {
    if(someString.includes(stringToSearchFor)){
        return true
    }
    else{
        return false
    }
    // your code
}

console.log(stringContains("catapult", "cat")) // true
console.log(stringContains("catapult", "dog")) // false
