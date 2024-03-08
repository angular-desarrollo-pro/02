//El objetivo de este ejercicio es practicar la desestructuración de objetos en TypeScript, especialmente cuando se trata de objetos anidados dentro de otros objetos.

interface Personaje {
  nombre: string;
  edad: number;
  ubicacion: Ubicacion;
}

interface Ubicacion {
  lugar: string;
  coordenadas: Coordenadas;
}

interface Coordenadas {
  latitud: number;
  longitud: number;
}

const personaje: Personaje = {
  nombre: "Arya Stark",
  edad: 18,
  ubicacion: {
    lugar: "Braavos",
    coordenadas: {
      latitud: 42.6,
      longitud: 18.2
    }
  }
};

// Desestructuración del objeto personaje
const { nombre, edad, ubicacion } = personaje

// Desestructuración del objeto ubicacion
const { lugar, coordenadas } = ubicacion

// Desestructuración del objeto coordenadas
const { latitud, longitud } = coordenadas

// Imprimir información
console.log("Nombre:  ", nombre);
console.log("Edad: ", edad);
console.log("Ubicación: ", ubicacion);
console.log("Lugar: ", lugar);
console.log("Coordenadas:", coordenadas);
console.log("Latitud: ", latitud);
console.log("Longitud: ", longitud);

export { }