async function inicio() {
  div1 = document.getElementById("divUsuario");
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  json = await response.json();
  div1.innerHTML = `<h1>Nombre: ${json.name}</h1><p>Usuario: ${json.username}</p><p>Correo: ${json.email}</p><p>Dirección: ${json.address.street}, ${json.address.suite}, ${json.address.city}</p>`;
}
window.addEventListener("DOMContentLoaded", inicio);
