const mongoose = require("mongoose");


const landingSchema = new mongoose.Schema(
  {
    img_url: { type: String, required: true },
    title: { type: String, required: true },
    // price: { type: Number, required: true },
    // btn: {type: String,  require: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


module.exports = mongoose.model("landing",landingSchema);