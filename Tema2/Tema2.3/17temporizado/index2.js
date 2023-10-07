// Función para abrir la ventana nueva
function abrirVentana() {
  // Abrir la ventana nueva de 300x300
  const nuevaVentana = window.open("", "", "width=300,height=300");

  // Función para mostrar la hora actual y actualizarla continuamente
  function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    // Formatear la hora en HH:MM:SS
    const horaFormateada = `${hora}:${minutos}:${segundos}`;

    // Mostrar la hora en la ventana nueva
    nuevaVentana.document.body.innerHTML = `<p>${horaFormateada}</p>`;

    // Actualizar cada segundo
    setTimeout(mostrarHora, 1000);
  }

  // Iniciar el reloj
  mostrarHora();

  // Detener el reloj después de 5 segundos
  setTimeout(() => {
    nuevaVentana.close();
  }, 5000);

  // Cerrar la ventana después de 10 segundos
  setTimeout(() => {
    nuevaVentana.close();
  }, 10000);
}
