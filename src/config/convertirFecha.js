export const convertirFecha = (fechaISO) => {
  // Convertir a objeto Date
  const fecha = new Date(fechaISO);

  // Obtener día, mes y año
  const dia = fecha.getUTCDate();
  const mes = fecha.getUTCMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso se suma 1
  const anio = fecha.getUTCFullYear();

  // Formatear la fecha como dd/mm/yyyy
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
};
