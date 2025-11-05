const mongoose = require("mongoose");
const animalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: false, // ← CAMBIAR a false
        default: Date.now // ← AGREGAR valor por defecto
    }
});
module.exports = mongoose.model("Animal", animalSchema);