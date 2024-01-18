let api = () => {
  var contenedor1 = document.getElementById("recipeTitle");
  var contenedor2 = document.getElementById("datos");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php", true);
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      let resultados = json.meals;
      var ingre = [];
      resultados.forEach((resultado) => {
        contenedor1.innerHTML = `<p>Nombre: ${resultado.strMeal}</p>`;
        for (i = 1; i < 20; i++) {
          var ingr = resultado["strIngredient" + i];
          ingre.push(ingr);
        }
        contenedor2.innerHTML = `<img src="${resultado.strMealThumb}" alt='Foto'> <p> <ul><li> ${ingre}</li></ul></p> <p><a href="">hola</a></p>  `;
      });
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      receta.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
};
console.log("Este mensaje cargará de cualquier forma");
let inicio = () => {
  document.getElementById("b1").addEventListener("click", api);
};
window.addEventListener("DOMContentLoaded", inicio);
