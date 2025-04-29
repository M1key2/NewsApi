import express from 'express';
import routerArticulos from './routes/articulos.routes.js';

const app = express();

app.use(express.json()); // Middleware para parsear JSON
const port = process.env.PORT || 3002;


app.use('/api', routerArticulos);
app.use(express.json()); 
app.listen(port, () => console.log('working'));
