async function obtenerNombresUsuarios() {
  try {
    // 1. Pedimos los datos a la API (await espera a que el servidor responda)
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    // Validamos que la respuesta sea exitosa (código 200-299)
    if (!respuesta.ok) {
      throw new Error(`Error en la red: ${respuesta.status}`);
    }

    // 2. Convertimos los datos crudos a formato JSON (también es asíncrono, lleva await)
    const usuarios = await respuesta.json();

    // 3. Recorremos el array de objetos para mostrar solo los nombres
    usuarios.forEach(usuario => {
      console.log(usuario.name);
    });

  } catch (error) {
    // 4. Si la red se cae, la URL falla o hay un error, el código aterriza aquí
    console.error("¡Ups, algo falló!", error.message);
  }
}

// Ejecutamos la función
obtenerNombresUsuarios();