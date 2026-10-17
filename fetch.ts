interface Usuario {
  nombre: string
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}`);
    }

    const datos: Usuario[] = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("No se pudieron obtener los usuarios:", error);
    return [];
  }
}