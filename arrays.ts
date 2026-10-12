interface Personas {
  edad: number,
  pais: string,
  nombre:string
}

const persona: Personas[] = [
  { nombre: "Santiago", edad: 21, pais: "Colombia" },
  { nombre: "Valeria", edad: 24, pais: "Colombia" },
  { nombre: "Mateo", edad: 19, pais: "Colombia" },
  { nombre: "Camila", edad: 22, pais: "México" },
  { nombre: "Lucas", edad: 26, pais: "Argentina" },
  { nombre: "Sofia", edad: 20, pais: "Chile" },
  { nombre: "Diego", edad: 13, pais: "Perú" },
  { nombre: "Elena", edad: 15, pais: "España" }
]
const club = persona.filter((v) => v.edad >= 18)
const resultado = club.map(({ nombre, edad, pais }) => {
  console.log(`Estas personas son: ${nombre}, sus edades corresponden a: ${edad} y son del país: ${pais}`);
});
