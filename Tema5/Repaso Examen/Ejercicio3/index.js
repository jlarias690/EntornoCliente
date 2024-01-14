let inicio = () => {
  document.getElementById("btn").addEventListener("click", getResponse);
};

async function getResponse() {
  const response = await fetch("https://yesno.wtf/api");
  json = await response.json();
  if (!response.ok) {
    console.log(response.status + "," + response.statusText);
  } else {
    document.getElementById("p1").innerHTML = "Respuesta: " + json.answer;
  }
}

document.addEventListener("DOMContentLoaded", inicio);
