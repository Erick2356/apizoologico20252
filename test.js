const mongoose = require('mongoose');
require('dotenv').config();

const animalSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    tipo: { type: String, required: true },
    fecha: { type: Date, required: false }
});

const Animal = mongoose.model('Animal', animalSchema);

async function test() {
    try {
        console.log('🔗 Conectando a MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Conectado a MongoDB');

        // Crear un animal de prueba
        const testAnimal = new Animal({
            nombre: "Test Directo",
            edad: 3,
            tipo: "Prueba",
            fecha: new Date()
        });

        console.log('📝 Guardando animal de prueba...');
        const saved = await testAnimal.save();
        console.log('✅ Animal guardado:', saved);

        // Leer todos los animales
        const animals = await Animal.find();
        console.log('📊 Animales en la BD:', animals);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

test();