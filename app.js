import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import scenariosRoutes from './routes/scenarios.js';
import correctionsRoutes from './routes/corrections.js';
const app = express();

app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Lingualy');
});

app.use('/api/scenarios', scenariosRoutes);
app.use('/api/corrections', correctionsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
