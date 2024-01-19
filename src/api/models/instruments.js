const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, enum: ["frotada", "pulsada", "percutida", "madera", "metal", "determinada", "indeterminada"] },
  },
  {
    timestamps: true,
    collection: "instruments"
  }
);
const Instrument = mongoose.model("instruments", instrumentSchema, "instruments");
module.exports = Instrument;