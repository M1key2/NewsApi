import {Router} from 'express';
import { getArticuloById, getArticulos, insertArticulo } from '../controllers/articulos.controller.js';
const router = Router();

router.get('/articulos', getArticulos);
router.get('/articulos/:id', getArticuloById);
router.post('/articulos', insertArticulo);
router.put('/articulos', (req, res) => {
  res.send('Articulos');
});
router.delete('/articulos', (req, res) => {
  res.send('Articulos');
});



export default router;