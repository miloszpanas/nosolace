import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const ApparelSchema = new Schema({
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
  size: [
    {
      type: String
    }
  ],
  images: [
    {
      type: String
    }
  ]
});

const Apparel = models.Apparel || model<ApparelItem>("Apparel", ApparelSchema);
export default Apparel;
