const isPalindrome = (someString) => {
    if(typeof someString !== 'string'){
        throw new Error("Error")
    }

    reversed =""

    for(let i=someString.length -1 ; i >= 0; i--){
        reversed += someString[i];
    }
    if(reversed === someString){
        return true
    }
    else{
        return false
    }
}

module.exports = {
    isPalindrome
};

//console.log(isPalindrome("racecar")) // true
//console.log(isPalindrome("apple")) // false