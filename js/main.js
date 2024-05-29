import { tiposError, mensajes } from "./custom-error.js";
import validarEmail from "./validar-email.js";
import activarSubmit from "./activar-submit.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    asunto: e.target.elements["asunto"].value,
    mensajeArea: e.target.elements["mensajeArea"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  //console.log(listaRespuestas);
  window.location.href = "../index.html";
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("blur", () => activarSubmit());
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");

  if (campo.name == "email") {
    validarEmail(campo);
  }

  //console.log(campo.validity);
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
      console.log(mensaje);
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}
