export const convertirArray = (array) => {
  array.replace(",", " ");
  const newArray = array
    .split(",")
    .map((valor) => valor.trim())
    .filter((valor) => valor !== "");
  return newArray;
};
