export function convertirId(frase) {
  return frase
    .toLowerCase() // Convertimos toda la frase a minúsculas
    .normalize("NFD") // Normalizamos la frase para eliminar los acentos
    .replace(/[\u0300-\u036f]/g, "") // Eliminamos los acentos
    .replace(/[^a-z0-9\s-]/g, "") // Eliminamos cualquier carácter que no sea letra, número, espacio o guion
    .trim() // Eliminamos espacios al inicio y al final
    .replace(/\s+/g, "-"); // Reemplazamos los espacios por guiones
}

