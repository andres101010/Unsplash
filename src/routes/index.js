
const express = require('express');
const router = express.Router();
// Bienvenida
router.get('/',(req,res)=>{
    res.send("Bienvenido a Unsplash")
})

// llamar todas las imagenes

// llamar imagen por ID

// Crear imagen

// Borrar imagen

module.exports = router;
