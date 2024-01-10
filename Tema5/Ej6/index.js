async function insertarPost() {
  try {
    const post = {
      title: "Título del post",
      body: "Contenido del post",
      userId: 1,
    };

    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );

    const nuevoPost = await respuesta.json();

    // Mostrar el conjunto de datos insertados en un div
    const divDatos = document.getElementById("datos");
    divDatos.innerHTML = JSON.stringify(nuevoPost);
  } catch (error) {
    console.log("Error al insertar el post:", error);
  }
}

insertarPost();
