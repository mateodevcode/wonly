export function acortarNombre(nombre, maxLength) {
  // const maxLength = 30;

  if (nombre.length > maxLength) {
    return nombre.slice(0, maxLength) + "...";
  }

  return nombre;
}
