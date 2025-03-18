import pkg from 'pg';
const {Pool} = pkg
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const client = new Pool({
    user: process.env.RDS_USERNAME || process.env.DB_USER,
    host: process.env.RDS_HOSTNAME || process.env.DB_HOST,
    database: process.env.RDS_DB_NAME || process.env.DB_NAME,
    password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD,
    port: process.env.RDS_PORT || process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Permite conexiones sin verificar certificados
    },
});

export default client;
