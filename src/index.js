const express = require("express");
const app = express();
const { connection } = require("../db/connection");
const cors = require("cors");
const config = require("./config");
const { ProductModel } = require("../db");

async function main() {
  await connection.init();

  app.get("/products", cors(), async (req, res) => {
    try {
      const products = await ProductModel.find();
      return res.status(200).send(products);
    } catch (error) {
      return res.status(500).send(error);
    }
  });

  app.listen(config.port, (err) => (err ? console.log(err) : console.log(`Server started: ${config.port}`)));
}

main().catch(console.error);
