let puntuacionUsuario: number = 0;
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoInformacion = document.getElementById("informacion");
const imagenCarta = document.getElementById("carta-mostrada");
const botonDameCarta = document.getElementById("dame-carta");
const botonMePlanto = document.getElementById("me-planto");
const botonRestart = document.getElementById("restart");

const muestraPuntuacion = (): void => {
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${puntuacionUsuario}`;
  } else {
    console.error("no existe el elemento puntuación");
  }
};

const gameOver = (): void => {
  if (
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    if (puntuacionUsuario > 7.5) {
      elementoInformacion.innerHTML = `GAME OVER. Te has pasado!`;
      botonDameCarta.hidden = true;
      botonMePlanto.hidden = true;
      botonRestart.hidden = false;
    }
    if (puntuacionUsuario === 7.5) {
      elementoInformacion.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
      botonDameCarta.hidden = true;
      botonMePlanto.hidden = true;
      botonRestart.hidden = false;
    }
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const mostrarCarta = (carta: number): void => {
  if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
    switch (carta) {
      case 1:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 1;
        break;
      case 2:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 2;
        break;
      case 3:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 3;
        break;
      case 4:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 4;
        break;
      case 5:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 5;
        break;
      case 6:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 6;
        break;
      case 7:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 7;
        break;
      case 10:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 0.5;
        break;
      case 11:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 0.5;
        break;
      case 12:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        puntuacionUsuario = puntuacionUsuario + 0.5;
        break;

      default:
        imagenCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
  }
};

const mePlanto = () => {
  if (
    elementoInformacion &&
    botonDameCarta &&
    botonMePlanto &&
    botonRestart &&
    elementoInformacion &&
    botonDameCarta instanceof HTMLButtonElement &&
    botonMePlanto instanceof HTMLButtonElement &&
    botonRestart instanceof HTMLButtonElement
  ) {
    if (puntuacionUsuario < 5) {
      elementoInformacion.innerHTML = `Has sido muy conservador`;
    } else {
      puntuacionUsuario >= 5 && puntuacionUsuario < 6
        ? (elementoInformacion.innerHTML = `Te ha entrado el canguelo eh?`)
        : (elementoInformacion.innerHTML = `Casi casi...`);
    }

    botonDameCarta.hidden = true;
    botonMePlanto.hidden = true;
    botonRestart.hidden = false;
  }
};

const dameCarta = (): void => {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  const carta = numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
  mostrarCarta(carta);
  muestraPuntuacion();
  gameOver();
};

const reset = () => {
  window.location.reload();
};

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", dameCarta);
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}

if (botonRestart && botonRestart instanceof HTMLButtonElement) {
  botonRestart.addEventListener("click", reset);
}
