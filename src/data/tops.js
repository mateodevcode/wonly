export const topPeliculas = {
    titulo: 'Top 5 Peliculas',
    items: [{
        nombre: "El castillo de Cagliostro",
        url: "peliculas/el-castillo-de-cagliostro-lupin-iii"
    },
    {
        nombre: "John Wick: Capítulo 3",
        url: "peliculas/john-wick-3"
    },
    {
        nombre: "Iron Man 3",
        url: "peliculas/iron-man-3"
    },
    {
        nombre: "John Wick 1",
        url: "peliculas/john-wick-1"
    }]
}

export const topSeries = {
    titulo: 'Top 5 Series',
    items: [{
        nombre: "Mr. Robot",
        url: "series/mr-robot"
    },
    {
        nombre: "Vikingos",
        url: "series/vikingos"
    },
    {
        nombre: "Juegos de tronos",
        url: "series/juegos-de-tronos"
    },
    {
        nombre: "Wayne",
        url: "series/wayne"
    }]
}

export const proximamente = {
    titulo: 'Estrenos',
    items: [{
        nombre: "Joker 2",
        url: "peliculas/joker-2"
    },
    {
        nombre: "Deadpool & Wolverine",
        url: "peliculas/deadpool-y-wolverine"
    },
    ]
}

export const tops = [
    {
        titulo: topPeliculas.titulo,
        items: topPeliculas.items
    },
    {
        titulo: topSeries.titulo,
        items: topSeries.items
    },
    {
        titulo: proximamente.titulo,
        items: proximamente.items
    }
]