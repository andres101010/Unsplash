const pool = require('../db/db');
const cloudinary = require('../middlewares/cloudinary');

const sendImage = async (req,res) => {
    const client = await pool.connect()
    try {
      const result = await client.query('SELECT * FROM image');
      return res.json({
         message: result.rows
      });
      
    } catch (error) {
      console.error('Error fetching images:', error);
        return [];
    } finally {
      client.release();
  }
};

const createImage = async (req,res) => {
    const client = await pool.connect();
    const descripcion = req.body
    const file = req.file
    
    if(!file){
      return res.json({
        message: 'No file attached'
    })
    };
    try {
      
        const resultCloudinary = await cloudinary.v2.uploader.upload(file.path);
        const imageUrl = resultCloudinary.secure_url;
        const result = await client.query(`INSERT INTO image (url, descripcion) VALUES ($1, $2)`, [imageUrl, descripcion]);
        return res.json({
          message: 'Image uploaded successfully', result,
          imageUrl: imageUrl
        })
      
    } catch (error) {
      console.error('Error uploading image:', error);
        return res.json({
          message: 'Error uploading image',
          error: error
        })
    } finally {
      client.release();
    }
};

    const deleteImage = async (req, res) => {
      const client = await pool.connect();
      const id = req.params.id

      try {
        const result = await client.query(`
        DELETE FROM image
        WHERE id = $1;
    `, [id]);
        return res.json({
          message: 'Image deleted successfully',
          result: result
        })
      } catch (error) {
        console.log(error)
        return res.json({
          message: 'Error deleted image',
          error: error
        })
      } finally {
        client.release();
      }
    };


module.exports = { sendImage, createImage, deleteImage }