interface Usuario {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

async function ObtenerUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const datos: Usuario[] = await respuesta.json();

  const mostrarInfo = datos.map(({ name, address: { city } }) => `${name} vive en ${city}`);
  console.log(mostrarInfo);
}

ObtenerUsuarios();