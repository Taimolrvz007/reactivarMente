interface Viaje {
  pais: string;
  precio?: number;
  numerosViajeros: number;
}

const viajes: Viaje[] = [
  { pais: "argentina", precio: 300, numerosViajeros: 1 },
  { pais: "colombia",  numerosViajeros: 3 },
];

const paisconMap = viajes.map(({pais,precio}) => {
  if (precio === undefined)  `${pais}: sin precio`;
  return `${pais}: $${precio}`;
});
console.log(paisconMap)