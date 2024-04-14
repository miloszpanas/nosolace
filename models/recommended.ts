import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const RecommendedSchema = new Schema({
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

const Recommended = models.Recommended || model<MusicItem>("Recommended", RecommendedSchema);
export default Recommended;
