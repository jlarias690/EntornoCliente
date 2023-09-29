var $num = Number(
  prompt(`1-El helado sin topping cuesta 
2-El topping de oreo cuesta
3-El topping de kitkat cuesta
4-El topping de brownie cuesta
5-El topping de lacasitos cuesta`)
);
var $pre = 1.9;

switch ($num) {
  case 1:
    document.write("El helado sin topping cuesta " + $pre);
    break;
  case 2:
    document.write("El topping de oreo cuesta 1€.<br>");
    document.write("El helado cuesta: " + Number($pre + 1));
    break;
  case 3:
    document.write("El topping de kitkat cuesta 1.50€<br>");
    document.write("El helado cuesta: " + Number($pre + 1.5));
    break;
  case 4:
    document.write("El topping de brownie cuesta 0.75€<br>");
    document.write("El helado cuesta: " + Number($pre + 0.75));
    break;
  case 5:
    document.write("El topping de lacasitos cuesta 0.95€.<br>");
    document.write("El helado cuesta: " + Number($pre + 0.95).toFixed(2));
    break;
  default:
    document.write("“No tenemos este topping, lo sentimos");
}
