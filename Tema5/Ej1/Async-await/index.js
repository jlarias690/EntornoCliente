async function getResponse() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  json = await response.json();

  document.getElementById(
    "data"
  ).innerHTML = `<p>Nombre->${json.name}</p> <p>Nombre de usuario->${json.username}</p> <p>Correo->${json.email}</p> <p>Direccion->${json.address.street},${json.address.suite},${json.address.city}</p>`;

  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  }
}

getResponse();
