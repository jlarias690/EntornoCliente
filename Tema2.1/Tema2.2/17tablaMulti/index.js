var $num1 = Number(
  prompt(
    "Escribe el numero correspodiente de la tabla que quieres que se te muestre."
  )
);

for ($i = 0; $i <= 10; $i++) {
  let $multi = $num1 * $i;
  document.write(`${$num1} x ${$i} = ${$multi} <br>`);
}
