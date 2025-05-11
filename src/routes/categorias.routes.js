import { Router } from "express";
import { createCategoria, deleteCategoria, getCategoriaById, getCategorias, updateCategoria } from "../controllers/categorias.controller.js";

const router = Router();

router.get('/categorias', getCategorias);

router.get('/categorias/:id', getCategoriaById, (req, res) => {
    res.send('Hola desde categorias');
});


router.post('/categorias', createCategoria, (req, res) => {
    res.send('Hola desde categorias');
});

router.put('/categorias/:id', updateCategoria, (req, res) => {
    res.send('Hola desde categorias');
});

router.patch('/categorias/:id', updateCategoria, (req, res) => {
    res.send('Hola desde categorias');
});

router.delete('/categorias/:id', deleteCategoria, (req, res) => {
    res.send('Hola desde categorias');
});

export default router;