import { Router } from 'express';
import { createFuente, deleteFuente, getFuenteById, getFuentes, updateFuente } from "../controllers/fuentes.controller.js";

const router = Router();


router.get('/fuentes', getFuentes);


router.get('/fuentes/:id', getFuenteById, (req, res) => {
    res.send('Hola desde fuentes');
});
router.post('/fuentes', createFuente, (req, res) => {
    res.send('Hola desde fuentes');
});
router.put('/fuentes/:id', updateFuente, (req, res) => {
    res.send('Hola desde fuentes');
});
router.patch('/fuentes/:id', updateFuente, (req, res) => {
    res.send('Hola desde fuentes');
});
router.delete('/fuentes/:id', deleteFuente, (req, res) => {
    res.send('Hola desde fuentes');
}); 



export default router;