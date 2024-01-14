/*Ejemplo de Api Fetch async/await get
async function getResponse() {
const response = await fetch('https://jsonplaceholder.typicode.com/users');
json = await response.json();
if (!response .ok){
console.log(response.status + “, “ + response.statusText );
}
*/

async function getResponse() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    var elemento = document.getElementById("contenedor1");
    elemento.innerHTML = `<p>Nombre: ${json.name}</p>
    <p>Ususario: ${json.username}</p>
    <p>Correo: ${json.email}</p>
    <p>Direccion: ${json.address.street} ,${json.address.suite} ,${json.address.city}</p>`;
  }
}

getResponse();
