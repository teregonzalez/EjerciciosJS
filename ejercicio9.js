const capitalizeFirstLetterOfEachWord = (someString) => {
    const someArray = someString.split(" "); //tomo cada palabra del array

    for (let i = 0; i < someArray.length; i++) {
        someArray[i] = someArray[i][0].toUpperCase() + someArray[i].substring(1);
        //extraigo la letra que esta en la primera posición de cada elemento del array
        //la coloco en mayuscula y luego la concateno 
    }
    
    return someArray.join(" ");

}

console.log(capitalizeFirstLetterOfEachWord("i am a string")) // I Am A String