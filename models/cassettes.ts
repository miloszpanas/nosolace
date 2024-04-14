import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const CassetteSchema = new Schema({
  name: {
    type: String
  },
  availability: {
    type: String
  },
  shipmentInfo: {
    type: String
  },
  price: {
    type: Number
  },
  images: [
    {
      type: String
    }
  ]
});

const Cassette = models.Cassette || model<MusicItem>("Cassette", CassetteSchema);
export default Cassette;
