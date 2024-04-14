import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const LongPlaysSchema = new Schema({
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

const LongPlays = models.LongPlays || model<MusicItem>("LongPlays", LongPlaysSchema);
export default LongPlays;
