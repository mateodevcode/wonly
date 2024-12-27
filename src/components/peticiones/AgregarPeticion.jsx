"use client";
import { convertirArray } from "@/config/convertirArray";
import { convertirId } from "@/config/convertirId";
import { Input, Textarea, useToast } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AgregarPeticion = () => {
  const [peticiones, setPeticiones] = useState([]);
  const toast = useToast();
  const router = useRouter();
  const params = useParams();
  const [tipo, setTipo] = useState("pelicula");
  const [formData, setFormData] = useState({
    titulo: "",
    imagen_fondo: "",
    imagen_perfil: "",
    id: "",
    descripcion: "",
    year: "",
    generos: "",
    linkTo: "",
    publico: "",
    duracion: "",
    url: "",
    temporada: "",
    cantidad: "",
  });
  const [seriesData, setSeriesData] = useState({
    titulo: "",
    imagen_fondo: "",
    imagen_perfil: "",
    id: "",
    descripcion: "",
    year: "",
    generos: "",
    publico: "",
    temporadas: [
      {
        temporada: "",
        titulo: "",
        cantidad: "",
        url: "",
        imagen_fondo: "",
        linkTo: "",
        episodios: [
          {
            temporada: "",
            episodio: "",
            titulo: "",
            duracion: "",
            descripcion: "",
            url: "",
            imagen_perfil: "",
          },
        ],
      },
    ],
  });

  const addSeason = () => {
    setSeriesData((prevState) => ({
      ...prevState,
      temporadas: [...prevState.temporadas, { episodios: [] }],
    }));
  };

  const addEpisode = (seasonIndex) => {
    setSeriesData((prevState) => {
      // Copiamos el estado de las temporadas para evitar modificar el estado anterior
      const updatedSeasons = prevState.temporadas.map((season, index) => {
        // Solo modificamos la temporada deseada
        if (index === seasonIndex) {
          return {
            ...season,
            episodios: [
              ...season.episodios,
              {
                temporada: "",
                episodio: "",
                titulo: "",
                duracion: "",
                descripcion: "",
                url: "",
                imagen_perfil: "",
              },
            ],
          };
        }
        return season;
      });

      // Actualizamos solo si hubo cambios en el estado
      if (
        JSON.stringify(updatedSeasons) !== JSON.stringify(prevState.temporadas)
      ) {
        return {
          ...prevState,
          temporadas: updatedSeasons,
        };
      }
      return prevState; // No actualizamos el estado si no hubo cambios
    });
  };

  const handleChangeSeries = (e, seasonIndex, episodeIndex = null) => {
    const { name, value } = e.target;

    setSeriesData((prevState) => {
      const updatedSeasons = [...prevState.temporadas];

      if (episodeIndex !== null) {
        updatedSeasons[seasonIndex].episodios[episodeIndex][name] = value;
      } else if (seasonIndex !== null) {
        updatedSeasons[seasonIndex][name] = value;
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
      return { ...prevState, temporadas: updatedSeasons };
    });
  };

  const handleChangeSerie = (e) => {
    setSeriesData({
      ...seriesData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cargarPeticiones = async () => {
    const res = await fetch("/api/peticiones");
    const data = await res.json();
    setPeticiones(data);
  };

  useEffect(() => {
    cargarPeticiones();
  }, []);

  const PeticionSeleccionada = peticiones.find(
    (peticion) => peticion._id === params.peticion
  );

  const handleCreatePelicula = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/peliculas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: formData.titulo,
          imagen_fondo: formData.imagen_fondo,
          imagen_perfil: formData.imagen_perfil,
          id: convertirId(formData.titulo),
          descripcion: formData.descripcion,
          year: formData.year,
          generos: convertirArray(formData.generos),
          linkTo: convertirId(formData.titulo),
          publico: formData.publico,
          duracion: formData.duracion,
          url: convertirArray(formData.url),
        }),
      });
      if (res.ok) {
        toast({
          title: "Pelicula creada.",
          description: "La pelicula se ha creado correctamente.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al crear la pelicula.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleCreateSerie = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: seriesData.titulo,
          imagen_fondo: seriesData.imagen_fondo,
          imagen_perfil: seriesData.imagen_perfil,
          id: convertirId(seriesData.titulo),
          descripcion: seriesData.descripcion,
          year: seriesData.year,
          generos: convertirArray(seriesData.generos),
          publico: seriesData.publico,
          temporadas: seriesData.temporadas.map((temporada, tempIndex) => ({
            temporada: `Temporada ${tempIndex + 1}`,
            titulo: temporada.titulo,
            cantidad: temporada.episodios.length,
            url: temporada.url,
            imagen_fondo: temporada.imagen_fondo,
            linkTo: `temporada-${tempIndex + 1}`,
            episodios: temporada.episodios.map((episodio, epiIndex) => ({
              temporada: `T${tempIndex + 1}`,
              episodio: `E${epiIndex + 1}`,
              titulo: episodio.titulo,
              duracion: episodio.duracion,
              descripcion: episodio.descripcion,
              url: convertirArray(episodio.url),
              imagen_perfil: episodio.imagen_perfil,
            })),
          })),
        }),
      });
      if (res.ok) {
        toast({
          title: "Serie creada.",
          description: "La serie se ha creado correctamente.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error.",
        description: "Ocurrió un error al crear la serie.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="pt-20 w-full bg-black h-full flex flex-col justify-start items-center">
      <div className="w-10/12 text-white font-mono mb-5 border-b-2 border-gray-700 pb-5">
        <h3 className="text-white text-3xl mb-5 font-extrabold">
          Datos de petición
        </h3>
        <p className="text-lg">
          <span className="font-bold">Nombre:</span>{" "}
          {PeticionSeleccionada?.nombre}
        </p>
        <p className="text-lg">
          <span className="font-bold">Correo:</span>{" "}
          {PeticionSeleccionada?.email}
        </p>
      </div>

      <div className="w-10/12 text-white font-mono">
        <p className="mb-2">Por favor indique si es pelicula o Serie</p>
        <input
          type="radio"
          id="pelicula"
          name="tipo"
          value="pelicula"
          onChange={(e) => setTipo(e.target.value)}
          className="mx-2"
        />
        <label htmlFor="pelicula">Pelicula</label>
        <input
          type="radio"
          id="serie"
          name="tipo"
          value="serie"
          onChange={(e) => setTipo(e.target.value)}
          className="mx-2"
        />
        <label htmlFor="serie">Serie</label>
      </div>
      <div className="w-10/12 text-white font-mono mt-5">
        {tipo === "pelicula" ? (
          <form
            onSubmit={handleCreatePelicula}
            action={`/api/peliculas/${params._id}`}
            method="POST"
          >
            <Input
              placeholder="Titulo de la Pelicula"
              className="my-2"
              onChange={handleChange}
              value={formData.titulo}
              name="titulo"
            />
            <Input
              placeholder="Imagen de Fondo"
              className="my-2"
              onChange={handleChange}
              value={formData.imagen_fondo}
              name="imagen_fondo"
            />
            <Input
              placeholder="Imagen de Perfil"
              className="my-2"
              onChange={handleChange}
              value={formData.imagen_perfil}
              name="imagen_perfil"
            />
            <Input
              placeholder="Id"
              readOnly={true}
              className="my-2"
              onChange={handleChange}
              value={convertirId(formData.titulo)}
              name="id"
            />
            <Textarea
              placeholder="Descripción"
              className="my-2"
              onChange={handleChange}
              value={formData.descripcion}
              name="descripcion"
            />
            <Input
              placeholder="Año"
              className="my-2"
              onChange={handleChange}
              value={formData.year}
              name="year"
            />
            <Input
              placeholder="Generos. Ejemplo: Acción,Aventura,Comedia"
              className="my-2"
              onChange={handleChange}
              value={formData.generos}
              name="generos"
            />
            <Input
              placeholder="Publico. Ejemplo: 18 >> +18"
              className="my-2"
              onChange={handleChange}
              value={formData.publico}
              name="publico"
            />
            <Input
              placeholder="Duración. EJemplo: 30 >> 30 min"
              className="my-2"
              onChange={handleChange}
              value={formData.duracion}
              name="duracion"
            />
            <Input
              placeholder="Urls de Reproducción. EJemplo: Url1,Ulr2,Url3"
              className="my-2"
              onChange={handleChange}
              value={formData.url}
              name="url"
            />
            <Boton type="submit">Crear</Boton>
          </form>
        ) : (
          <form
            onSubmit={handleCreateSerie}
            action={`/api/series/${params._id}`}
            method="POST"
          >
            <Input
              placeholder="Titulo de la Serie"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.titulo}
              name="titulo"
            />
            <Input
              placeholder="Imagen de Fondo"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.imagen_fondo}
              name="imagen_fondo"
            />
            <Input
              placeholder="Imagen de Perfil"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.imagen_perfil}
              name="imagen_perfil"
            />
            <Input
              placeholder="Id"
              readOnly={true}
              className="my-2"
              onChange={handleChangeSerie}
              value={convertirId(seriesData.titulo)}
              name="id"
            />
            <Textarea
              placeholder="Descripción"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.descripcion}
              name="descripcion"
            />
            <Input
              placeholder="Año"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.year}
              name="year"
            />
            <Input
              placeholder="Generos. Ejemplo: Acción,Aventura,Comedia"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.generos}
              name="generos"
            />
            <Input
              placeholder="Publico. Ejemplo: 18 >> +18"
              className="my-2"
              onChange={handleChangeSerie}
              value={seriesData.publico}
              name="publico"
            />
            <div
              className="font-semibold py-2 px-4 bg-white/10 hover:bg-white/20 w-max my-1 rounded-md flex flex-r justify-center items-center select-none cursor-pointer"
              onClick={addSeason}
            >
              <IoMdAdd className="mr-2" /> Agregar Temporada
            </div>
            {seriesData.temporadas.map((temporada, seasonIndex) => (
              <div key={seasonIndex}>
                <h3 className="text-2xl font-semibold my-2">
                  Temporadas {seasonIndex + 1}
                </h3>
                <Input
                  placeholder="Temporada"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={`Temporada ${seasonIndex + 1}`}
                  name="temporada"
                  readOnly={true}
                />
                <Input
                  placeholder="Titulo"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={temporada.titulo}
                  name="titulo"
                />
                <Input
                  placeholder="Cantidad de Episodios"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={temporada.episodios.length}
                  name="cantidad"
                />
                <Input
                  placeholder="Imagen de Perfil"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={temporada.url}
                  name="url"
                />
                <Input
                  placeholder="Imagen de Fondo"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={temporada.imagen_fondo}
                  name="imagen_fondo"
                />
                <Input
                  placeholder="LinkTo"
                  className="my-2"
                  onChange={(e) => handleChangeSeries(e, seasonIndex)}
                  value={`temporada-${seasonIndex + 1}`}
                  name="linkTo"
                />
                <h4 className="text-2xl font-semibold my-2">Episodios</h4>
                <div
                  className="font-semibold py-2 px-4 bg-white/10 hover:bg-white/20 w-max my-1 rounded-md flex flex-r justify-center items-center select-none cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(), addEpisode(seasonIndex);
                  }}
                >
                  <IoMdAdd className="mr-2" /> Agregar Episodio
                </div>
                {temporada.episodios.map((episode, episodeIndex) => (
                  <div key={episodeIndex} className="">
                    <h4 className="my-2 text-xl">
                      Episodio {episodeIndex + 1}
                    </h4>
                    <Input
                      placeholder="Temporada"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={`T${seasonIndex + 1}`}
                      name="temporada"
                      readOnly={true}
                    />
                    <Input
                      placeholder="Episodio"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={`E${episodeIndex + 1}`}
                      name="episodio"
                      readOnly={true}
                    />
                    <Input
                      placeholder="Titulo"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={episode.titulo}
                      name="titulo"
                    />
                    <Input
                      placeholder="Duración. EJemplo: 30 >> 30 min"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={episode.duracion}
                      name="duracion"
                    />
                    <Textarea
                      placeholder="Descripción"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={episode.descripcion}
                      name="descripcion"
                    />
                    <Input
                      placeholder="Urls de Reproducción. EJemplo: Url1,Ulr2,Url3"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={episode.url}
                      name="url"
                    />
                    <Input
                      placeholder="Imagen de Perfil"
                      className="my-2"
                      onChange={(e) =>
                        handleChangeSeries(e, seasonIndex, episodeIndex)
                      }
                      value={episode.imagen_perfil}
                      name="imagen_perfil"
                    />
                  </div>
                ))}
              </div>
            ))}
            <Boton type="submit">Crear</Boton>
          </form>
        )}
      </div>
    </div>
  );
};

const Boton = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white font-semibold py-1.5 px-3 rounded-lg my-2 text-sm hover:bg-blue-500">
      {children}
    </button>
  );
};

export default AgregarPeticion;
