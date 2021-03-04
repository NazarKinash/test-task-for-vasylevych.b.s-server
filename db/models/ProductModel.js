const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ProductSchema = mongoose.Schema({
  img: { type: String, required: true },
  asin: { type: String, required: true },
  price: { type: String, required: true },
  bsr_category: { type: String, required: true },
  link: { type: String, required: true },
  tonameken: { type: String, required: true },
});
ProductSchema.plugin(mongoosePaginate);
const ProductModel = mongoose.model("Product", ProductSchema);
exports.ProductModel = ProductModel;
