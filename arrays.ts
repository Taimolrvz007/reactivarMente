interface Viaje {
  pais: string;
  precio: number;
  numerosViajeros: number;
}

const viajes: Viaje[] = [
  { pais: "argentina", precio: 300, numerosViajeros: 1 },
  { pais: "colombia", precio: 250, numerosViajeros: 3 },
];

const contaFinal: number = viajes.reduce((acc: number, item: Viaje) => {
  return acc + item.numerosViajeros
}, 0);

console.log("cuenta final: ", contaFinal)