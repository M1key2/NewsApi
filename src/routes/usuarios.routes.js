import { Router } from 'express';
import { createUsuario, deleteUsuario, getUsuarioById, getUsuarios, updateUsuario } from "../controllers/usuarios.controller.js";

const router = Router();


router.get('/usuarios', getUsuarios);


router.get('/usuarios/:id', getUsuarioById, (req, res) => {
    res.send('Hola desde usuarios');
});
router.post('/usuarios', createUsuario, (req, res) => {
    res.send('Hola desde usuarios');
});
router.put('/usuarios/:id', updateUsuario, (req, res) => {
    res.send('Hola desde usuarios');
});
router.patch('/usuarios/:id', updateUsuario, (req, res) => {
    res.send('Hola desde usuarios');
});
router.delete('/usuarios/:id', deleteUsuario, (req, res) => {
    res.send('Hola desde usuarios');
}); 

export default router;