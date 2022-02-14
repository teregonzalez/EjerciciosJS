const reverseString = (someString)  => {
    if(typeof someString !== 'string'){
        throw new Error("Error")
    }
    reversed =""

    for(let i=someString.length -1 ; i >= 0; i--){
        reversed += someString[i];
    }
    return reversed
}
//console.log(reverseString("Hola"));

module.exports = {
    reverseString
};