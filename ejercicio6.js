const vowelOrConsonant = (someString, position) => {
    const someArray = someString.split("")
    let i = someArray[position-1];
    
    if(i=="a"  ||  i=="e"  ||  i=="i"  ||  i=="o" ||  i=="u"  ){
      return("vowel")
    }
  else {
    return("consonant")
  }
};

console.log(vowelOrConsonant("hello", 4)) // consonant
console.log(vowelOrConsonant("cat", 2)) // vowel
console.log(vowelOrConsonant("hhhhh", 4)) // consonant
console.log(vowelOrConsonant("aaaaa", 2)) // vowel