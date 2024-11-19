import { background } from "@chakra-ui/react";

export const enlaces = [
  {
    nombre: "Series",
    Url: "/series",
  },
  {
    nombre: "Peliculas",
    Url: "/peliculas",
  },
  // {
  //   nombre: "Blog",
  //   Url: "/blog",
  // },
];

const enlacesGenero = [
  {
    nombre: "Acción",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Acción",
  },
  {
    nombre: "Comedia",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Comedia",
  },
  {
    nombre: "Drama",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Drama",
  },
  {
    nombre: "Terror",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Terror",
  },
  {
    nombre: "Ciencia Ficción",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Ficción",
  },
  {
    nombre: "Documentales",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Documentales",
  },
  {
    nombre: "Anime",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Anime",
  },
  {
    nombre: "Niños",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Niños",
  },
  {
    nombre: "Aventura",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Aventura",
  },
  {
    nombre: "Marvel",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Marvel",
  },
  {
    nombre: "Misterio",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Misterio",
  },
  {
    nombre: "Fantasía",
    // Url: `/generos/${this.nombre}`,
    Url: "/generos/Fantasía",
  },
];

// Ordenar lista de generos
export const enlacesOrdenados = enlacesGenero.sort(function (a, b) {
  return a.nombre.localeCompare(b.nombre);
});

export const generos = {
  nombre: "Géneros",
  estilosLista: {
    // backgroundColor: "rgba(0, 0, 0, 0.9)",
    backgroundColor: "#18181B",
    color: "white",
    marginTop: "1rem",
  },
};

export const logo = {
  alt: "Logo de wonly",
  src: "https://i.postimg.cc/qBKvQZYs/Logo-wonly-5.png",
  href: "/",
};
