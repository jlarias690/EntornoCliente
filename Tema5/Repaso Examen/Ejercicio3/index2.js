let inicio = () => {
  document.getElementById("btn").addEventListener("click", getResponse);
};

async function getResponse() {
  const response = await fetch("https://yesno.wtf/api");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    imagen = document.createElement("img");
    imagen.src = json.image;
    p2 = document.createElement("p");
    p2.setAttribute("id", "p2");
    cuerpo = document.getElementsByTagName("body")[0];
    cuerpo.appendChild(p2);
    p2.innerHTML = "";
    document.getElementById("p2").appendChild(imagen);
    document.getElementById("p1").innerHTML = "Respuesta: " + json.answer;
  }
}

document.addEventListener("DOMContentLoaded", inicio);
