const mostCommonCharacter = (someString) => {
    const letterBox = new Map() //crea objeto mapeable letterBox
    const letterArray = someString.split("")
 
 letterArray.forEach(letter => {
 if(letterBox.has(letter)){
 let currentValue = letterBox.get(letter)
 letterBox.set(letter, currentValue + 1 )
 }else{
 letterBox.set(letter , 1 ) 
 }
 });
 
 let arr= []
 
 letterBox.forEach((v , k)=> {
 arr.push({letra: k, repeticiones: v})
 })
 
 let mayor = {repeticiones: 0}
 
 arr.map(item=> {
 if(item.repeticiones > mayor.repeticiones ){
 mayor = item
 }
 })
 console.log(mayor)

}

console.log(mostCommonCharacter("abcddefg")) // d
console.log(mostCommonCharacter("heggbdeff")) // f