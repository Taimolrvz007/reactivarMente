interface Viajes {
    pais: string,
    precio: number,
    numerosViajeros: number
}


const viajes: Viajes[] = [
    { pais: "argentina", precio: 300, numerosViajeros: 1 },
    { pais: "colombia", precio:250,numerosViajeros:3 },
    {pais: "mexico", precio:600, numerosViajeros:4}
]

const Precios = viajes.filter ((item) => item.precio >= 300 )

console.log(Precios)

