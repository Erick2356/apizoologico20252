const express = require("express");
const router = express.Router();
const animalSchema = require("../models/animalModel");

// -----------------------------
// CONSULTAR UN ANIMAL POR ID
// -----------------------------
router.get("/animals/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await animalSchema.findById(id);
        if (!data) return res.status(404).json({ message: "Animal no encontrado" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// -----------------------------
// CONSULTAR TODOS LOS ANIMALES
// -----------------------------
router.get("/animals", async (req, res) => {
    try {
        const data = await animalSchema.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// -----------------------------
// CONSULTAR ANIMALES MAYORES O IGUALES A 4 AÑOS
// -----------------------------
router.get("/animals/edad/mayores", async (req, res) => {
    try {
        const data = await animalSchema.find({ edad: { $gte: 4 } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// -----------------------------
// REGISTRAR NUEVO ANIMAL
// -----------------------------
router.post("/animals", async (req, res) => {
    try {
        const animal = new animalSchema(req.body);
        const saved = await animal.save();
        res.json({ message: "Animal agregado correctamente", data: saved });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// -----------------------------
// ACTUALIZAR UN ANIMAL EXISTENTE
// -----------------------------
router.put("/animals/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await animalSchema.updateOne({ _id: id }, { $set: req.body });
        if (updated.matchedCount === 0) {
            return res.status(404).json({ message: "Animal no encontrado" });
        }
        res.json({ message: "Animal actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// -----------------------------
// ELIMINAR UN ANIMAL
// -----------------------------
router.delete("/animals/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await animalSchema.deleteOne({ _id: id });
        if (deleted.deletedCount === 0) {
            return res.status(404).json({ message: "Animal no encontrado" });
        }
        res.json({ message: "Animal eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
