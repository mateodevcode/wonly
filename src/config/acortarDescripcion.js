export function acortarDescripcion(nombre, maxLength) {
  if (nombre.length > maxLength) {
    return nombre.slice(0, maxLength) + "...";
  }

  return nombre;
}
