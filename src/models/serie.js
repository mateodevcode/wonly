import mongoose, { models, Schema } from "mongoose";

const serieSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    imagen_fondo: {
      type: String,
      required: true,
    },
    imagen_perfil: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    generos: {
      type: Array,
      required: true,
    },
    temporadas: {
      type: Object,
      default: {
        temporada: "",
        titulo: "",
        cantidad: "",
        url: "",
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
    },
  },
  { timestamps: true }
);

const Serie = models.Serie || mongoose.model("Serie", serieSchema);
export default Serie;
