const {isPalindrome} = require("../src/ejercicio2");

describe ("Función isPalindrome", () => {
    it("Debe retornar true para oso", () => {
        //arrange
        const someString = "oso";

        //act
        const resultado = isPalindrome(someString);

        //assert
        expect(resultado).toBe(true);
    });

    it("Debe retornar false para gato", () => {
        //arrange
        const someString = "gato";

        //act
        const resultado = isPalindrome(someString);

        //assert
        expect(resultado).toBe(false);
    });

    it("Si se ingresa un numero debe arrojar error", () => {
        //arrange
        const someString = 4;

        //act
        const expectedResult = () => isPalindrome(someString);

        //assert
        expect(expectedResult).toThrowError();
    })

    it("La función sin parametros va a arrojar un error", () => {
        expect(() => isPalindrome()).toThrow("Error");
    })
});