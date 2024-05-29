export const tiposError = [
  "valueMissing",
  "typeMissmatch",
  "patternMissmatch",
  "tooShort",
  "customError",
];

export const mensajes = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "Es muy corto, ingresa un nombre válido.",
    tooLong: "Es muy largo, intenta con uno más corto",
  },
  email: {
    valueMissing: "El campo email no puede estar vacío.",
    typeMismatch: "Por favor, ingrese un email válido.",
    tooShort: "Es muy corto, ingrese un e-mail válido.",
    customError: "No es un email valido, Ej: usuario@correo.com",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacío.",
    tooShort: "Es muy corto, ingresa un asunto válido",
  },
  mensajeArea: {
    valueMissing: "El campo mensaje no puede estar vacío.",
    tooShort: "Es muy corto, ingresa un mensaje más largo",
  },
};
