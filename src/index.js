import express from 'express';
import routerArticulos from './routes/articulos.routes.js';
import routerCategorias from './routes/categorias.routes.js';
import routerFavoritos from './routes/favoritos.routes.js';
import routerFuentes from './routes/fuentes.routes.js';
import routerUsuarios from './routes/usuarios.routes.js';
import './models/associations.js';
import './config.js'
import './db.js';
import sequelize from './db.js';


await sequelize.sync({ force: false })
console.log('Base de datos sincronizada');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3002;


app.use('/api', routerArticulos);
app.use('/api', routerCategorias);
app.use('/api', routerFavoritos);
app.use('/api', routerFuentes);
app.use('/api', routerUsuarios);
app.use(express.json()); 
app.listen(port, () => console.log('working' + port));
