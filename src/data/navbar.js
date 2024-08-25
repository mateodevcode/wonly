export const enlaces = [
  {
    nombre: "Inicio",
    Url: "/",
  },
  {
    nombre: "Series",
    Url: "/series",
  },
  {
    nombre: "Peliculas",
    Url: "/peliculas",
  },
  {
    nombre: "Tendencias",
    Url: "#tendencias",
  },
];

const enlacesGenero = [
  {
    nombre: "Acción",
    Url: "/generos/accion",
  },
  {
    nombre: "Comedia",
    Url: "/generos/comedia",
  },
  {
    nombre: "Drama",
    Url: "/generos/drama",
  },
  {
    nombre: "Terror",
    Url: "/generos/terror",
  },
  {
    nombre: "Ciencia Ficción",
    Url: "/generos/ciencia-ficcion",
  },
  {
    nombre: "Documentales",
    Url: "/generos/documentales",
  },
  {
    nombre: "Anime",
    Url: "/generos/anime",
  },
  {
    nombre: "Niños",
    Url: "/generos/kids",
  },
  {
    nombre: "Aventura",
    Url: "/generos/aventura",
  },
  {
    nombre: "Marvel",
    Url: "/generos/marvel",
  },
]

 // Ordenar lista de generos
export const enlacesOrdenados = enlacesGenero.sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre);
  });


export const generos = {
  nombre: "Géneros",
  estilosLista: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    marginTop: "0.5rem",
  },
};

export const logo = {
  alt: "Logo de wonly",
  src: "/logo.png",
  width: 400,
  height: 400,
  href: "/",
};