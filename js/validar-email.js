export default function validarEmail(campo) {
  const validaEmail = campo.value.replace(
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g,
    ""
  );

  if (!validaEmail === true) {
    //console.log("Email valido");
  } else {
    campo.setCustomValidity("No es un correo");
    //console.log("No es email");
  }
}
