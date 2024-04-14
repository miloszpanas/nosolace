import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const CdsSchema = new Schema({
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

const Cds = models.Cds || model<MusicItem>("Cds", CdsSchema);
export default Cds;
