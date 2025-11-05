const parser = require("body-parser");
const express = require('express');
const cors = require('cors'); // ← AGREGAR ESTO
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal");
const authRoutes = require("./routes/authentication")
const mongoose = require("mongoose");
require('dotenv').config();

// AGREGAR CORS (esto va PRIMERO)
app.use(cors());

// Luego los parsers
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(express.json());

// Rutas
app.use("/api", animalRoutes);
app.use("/api", authRoutes);

// Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
});