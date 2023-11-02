var array = [];
let inicio = () => {
  for (i = 1; i <= 6; i++) {
    var trueOrFalse = document.getElementById("chk" + i).checked;
    array[i] = trueOrFalse;
  }

  console.log(array);
};

window.addEventListener("DOMContentLoaded", inicio);
