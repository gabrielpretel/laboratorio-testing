import { compruebaPartidaGanada, compruebaPartidaPerdida } from "./motor";
import { Partida } from "./modelo";

// Funciones que determinan si el usuario ha ganado o perdido la partida.

describe("compruebaPartidaGanada", () => {
  it("Debería devolver true si la puntuación del usuario es igual a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 7.5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = true;

    //Act
    const resultado = compruebaPartidaGanada(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver false si la puntuación del usuario es distinta a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = false;

    //Act
    const resultado = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("compruebaPartidaPerdida", () => {
  it("Debería devolver true si la puntuación del usuario es superior a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 8,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = true;

    //Act
    const resultado = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver true si la puntuación del usuario es superior a 7.5", () => {
    //Arrange
    const texto: Partida = {
      puntuacionUsuario: 5,
      partidaGanada: false,
      partidaPerdida: false,
    };
    const resultadoEsperado: boolean = false;

    //Act
    const resultado = compruebaPartidaPerdida(texto);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
