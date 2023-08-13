
const pool = require('../db/db');

const createTable = async () => {
    const client = await pool.connect();

    try {
        await client.query(
            `
            CREATE TABLE IF NOT EXISTS image (
                id SERIAL PRIMARY KEY,
                descripcion TEXT,
                url TEXT
            );
        `
        );
        console.log('Table "image" created successfully.')
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        client.release();
    }
}

module.exports = createTable;



