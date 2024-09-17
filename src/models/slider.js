import mongoose, { Schema, models } from "mongoose";

const sliderSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  cards: {
    type: Array,
    default: [],
  },
});

const Slider = models.Slider || mongoose.model("Slider", sliderSchema);
export default Slider;
