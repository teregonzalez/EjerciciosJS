const {reverseString} = require("../src/ejercicio1.js");

describe("Función reverseString", () => {
    it("Si la función recibe hola, debe retornar aloh", () => {
        //Arrange
        const word = "hola";

        //Act
        const resultado = reverseString(word);

        //Assert
        expect(resultado).toBe("aloh");
    })
    it("Si la función recibe un parametro distinto de String, arrojará un error", () => {
        //Arrange
        const word = 33;

        //Act
        const resultado = () => reverseString(word);

        //Assert
        expect(resultado).toThrow("Error")
    })
})