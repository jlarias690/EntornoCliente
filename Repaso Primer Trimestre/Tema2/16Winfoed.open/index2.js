let inicio = () => {
  document.getElementById("colorVerde").addEventListener("click", verde);
  document.getElementById("colorRojo").addEventListener("click", vPrincipal);
};

let verde = () => {
  window.document.body.style.backgroundColor = "green";
};
let vPrincipal = () => {
  window.opener.document.body.style.backgroundColor = "red";
};
window.addEventListener("DOMContentLoaded", inicio);
