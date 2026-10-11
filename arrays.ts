interface Viaje {
  pais: string;
  precio: number;
  numerosViajeros: number;
}

const viajes: Viaje[] = [
  { pais: "argentina", precio: 300, numerosViajeros: 1 },
  { pais: "colombia", precio: 250, numerosViajeros: 3 },
];

const paisconMap = viajes.find ((v) => v.pais == "colombia" && v.numerosViajeros)
console.log(`vas a ir a:`,paisconMap?.pais, "la cantidad viajeros: ", paisconMap?.numerosViajeros)