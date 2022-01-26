const sortString = (someString, reverseOrder) => {
    const someArray = someString.split("")
    const someArrayAZ = someArray.sort()
    
    if(reverseOrder==false){
    return someArrayAZ.join("")
      }
  else{
    return someArrayAZ.reverse().join("")
  }
}

console.log(sortString("bacd", false)) // "abcd"
console.log(sortString("axedzpq", true)) // "zxqpeda"