const reverseString = (someString)  => {
    reversed =""

    for(let i=someString.length -1 ; i >= 0; i--){
        reversed += someString[i];
    }
    return reversed
}
console.log(reverseString("Hola"));