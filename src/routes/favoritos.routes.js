import { Router } from 'express';
import { createFavorito, deleteFavorito, getFavoritoById, getFavoritos, updateFavorito } from "../controllers/favoritos.controller.js";

const router = Router();


router.get('/favoritos', getFavoritos);


router.get('/favoritos/:id', getFavoritoById, (req, res) => {
    res.send('Hola desde favoritos');
});
router.post('/favoritos', createFavorito, (req, res) => {
    res.send('Hola desde favoritos');
});
router.put('/favoritos/:id', updateFavorito, (req, res) => {
    res.send('Hola desde favoritos');
});
router.patch('/favoritos/:id', updateFavorito, (req, res) => {
    res.send('Hola desde favoritos');
});
router.delete('/favoritos/:id', deleteFavorito, (req, res) => {
    res.send('Hola desde favoritos');
}); 



export default router;