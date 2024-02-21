const mongoose = require("mongoose");
const express = require("express");

const app = express();

// change pw
const dbURI =
  "mongodb+srv://randyydoo:EasDnXjAYpzcBnGn@cluster.tnsu7qq.mongodb.net/BlogDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrkParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(3000, (req, res) => {
      console.log("Connected to DB listening on port 300");
    }),
  )
  .catch((error) => console.log(error));
