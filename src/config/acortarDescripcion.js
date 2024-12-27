export function acortarDescripcion(nombre) {
  const maxLength = 160;

  if (nombre.length > maxLength) {
    return nombre.slice(0, maxLength) + "...";
  }

  return nombre;
}
