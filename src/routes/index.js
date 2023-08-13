
const express = require('express');
const router = express.Router();
const image = require('../controladores/image');
const imageUpload = require('../middlewares/multer');
// const pool = require('../db/db');

// Bienvenida
router.get('/',(req,res)=>{
    res.send("Bienvenido a Unsplash")
})
// router.get('/ping', async (req,res)=>{
//     const client = await pool.connect(); 
//     const result = await client.query('SELECT NOW()')
//     res.json({
//         message: result.rows[0]
//     })
// })


// llamar todas las imagenes
router.get('/sendImage', image.sendImage);

// llamar imagen por ID

// Crear imagen
router.post('/createImage',imageUpload, image.createImage);

// Borrar imagen

router.delete('/deleteImage/:id', image.deleteImage)

module.exports = router;
