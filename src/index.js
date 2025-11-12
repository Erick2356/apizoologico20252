const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal");
const authRoutes = require("./routes/authentication");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", animalRoutes);
app.use("/api", authRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch((error) => console.log(error));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
