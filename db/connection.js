const mongoose = require("mongoose");
const config = require("../src/config");

class Connection {
  constructor() {
    this.connection = null;
  }

  async init() {
    this.connection = await mongoose.connect(
      "mongodb+srv://nazar:nnpeJ2GEGlx058AB@cluster0.pyzao.mongodb.net/products",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  }
}

exports.connection = new Connection();
