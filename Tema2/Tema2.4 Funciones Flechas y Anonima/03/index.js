cont = 0;
let rand = () => {
  for ($i = 1; $i <= 500; $i++) {
    var x = Math.random(1, 10000);
    x = x * 10000;
    x = Math.floor(x);
    cont++;
    if (x % 2 == 0) {
      document.write(cont + " . " + Math.floor(x) + " PAR" + "<br>");
    } else {
      document.write(cont + " . " + Math.floor(x) + " IMPAR" + "<br>");
    }
  }
};
document.write(rand());
