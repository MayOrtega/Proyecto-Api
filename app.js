//Importando las librerías instaladas
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();

app.use(cors());
//Debemos preparar al app para recibir info a través de un Post
app.use(express.json());

const port = process.env.PORT || 3000;

//Aquí invocamos a la rutas

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("El puerto es: " + port);
});

dbConnect();
