import mongoose, { models, Schema } from "mongoose";

const peticionesSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Peticiones =
  models.Peticiones || mongoose.model("Peticiones", peticionesSchema);
export default Peticiones;
