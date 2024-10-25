import mongoose, { models, Schema } from "mongoose";

const miListaSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Milista = models.Milista || mongoose.model("Milista", miListaSchema);
export default Milista;
