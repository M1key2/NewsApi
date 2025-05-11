import { Router } from "express";
import { createArticulo, deleteArticulo, getArticuloById, getArticulos, updateArticulo } from "../controllers/articulos.controller.js";

const router = Router();

router.get('/articulos', getArticulos);

router.get('/articulos/:id', getArticuloById, (req, res) => {
    res.send('Hola desde articulos');
});


router.post('/articulos', createArticulo, (req, res) => {
});

router.put('/articulos/:id', updateArticulo,  (req, res) => {
    res.send('Hola desde articulos');
});

router.patch('/articulos/:id', updateArticulo,  (req, res) => {
    res.send('Hola desde articulos');
});

router.delete('/articulos/:id', deleteArticulo, (req, res) => {
    res.send('Hola desde articulos');
});

export default router;