import mongoose, { models, Schema } from "mongoose";

const peliculaSchema = new Schema(
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
    publico: {
      type: String,
      required: false,
    },
    linkTo: {
      type: String,
      required: false,
    },
    duracion: {
      type: String,
      required: false,
    },
    url: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Pelicula = models.Pelicula || mongoose.model("Pelicula", peliculaSchema);
export default Pelicula;
