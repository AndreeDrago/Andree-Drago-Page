export default function activarSubmit() {
  let nombreData = document.getElementById("nombre");
  let emailData = document.getElementById("email");
  let asuntoData = document.getElementById("asunto");
  let textoData = document.getElementById("mensajeArea");
  let botonData = document.getElementById("boton__enviar");

  if (
    nombreData.value === "" ||
    emailData.value === "" ||
    asuntoData.value === "" ||
    textoData.value === ""
  ) {
    botonData.disabled = true;
  } else {
    botonData.disabled = false;
  }
}
