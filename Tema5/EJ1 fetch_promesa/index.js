let inicio = () => {
  div1 = document.getElementById("divUsuario");
  fetch("https://jsonplaceholder.typicode.com/users/5")
    .then((respuesta) => respuesta.json())
    .then(
      (json) =>
        (div1.innerHTML = `<h1>Nombre: ${json.name}</h1><p>Usuario: ${json.username}</p><p>Correo: ${json.email}</p><p>Dirección: ${json.address.street}, ${json.address.suite}, ${json.address.city}</p>`)
    );
};

window.addEventListener("DOMContentLoaded", inicio);
