function print() {
  for (i = 0; i <= 2000; i++) {
    draw();
  }
}
function draw() {
  console.log("Se esta imprimiendo");
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    //Asignamos que vamos a estar usando el CAMBAS en dos dimensiones.
    var ctx = canvas.getContext("2d");
    //Asigno los numero random a las variables que daran las cordenadas y el color.
    let y = Math.random(0, 1001);
    let x = Math.random(0, 1001);
    let color1 = Math.random(0, 256);
    let color2 = Math.random(0, 256);
    let color3 = Math.random(0, 256);

    //Le damos estilo a la forma que creamos.
    ctx.fillStyle = `rgb(${color1},${color2},${color3})`;
    //Metodo que dibuja rectangulos. Los dos primeros valores son las cordenadas y los otros dos son los pixeles que medira la forma.
    ctx.fillRect(x, y, 100, 100);
  }
}
