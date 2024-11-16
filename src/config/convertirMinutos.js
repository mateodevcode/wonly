export const convertirMinutos = (minutos) => {
  if (minutos.includes(":")) {
    const [horas, minuto] = minutos.split(":");
    return `${parseInt(horas)}h ${parseInt(minuto)}`;
  }

  if (minutos < 60) {
    return minutos;
  } else {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}`;
  }
};
