import Fuente from '../models/fuentes.model.js';

export const getFuentes = async (req, res) => {
    try {
        const fuentes = await Fuente.findAll();
        res.json(fuentes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las fuentes', error: error.message });
    }
};

export const getFuenteById = async (req, res) => {
    try {
        const { id } = req.params;
        const fuente = await Fuente.findByPk(id);
        if (!fuente) {
            return res.status(404).json({ message: 'Fuente no encontrada' });
        }
        res.json(fuente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la fuente', error: error.message });
    }
};

export const createFuente = async (req, res) => {
    try {
        const { nombre, url } = req.body;

        // Validación de campos obligatorios
        if (!nombre || !url) {
            return res.status(400).json({ message: 'Los campos nombre y url son obligatorios' });
        }

        const nuevaFuente = await Fuente.create({
            nombre,
            url,
        });

        res.status(201).json(nuevaFuente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la fuente', error: error.message });
    }
};

export const updateFuente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, url } = req.body;

        const fuente = await Fuente.findByPk(id);
        if (!fuente) {
            return res.status(404).json({ message: 'Fuente no encontrada' });
        }

        fuente.nombre = nombre || fuente.nombre;
        fuente.url = url || fuente.url;

        await fuente.save();
        res.json(fuente);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la fuente', error: error.message });
    }
};

export const deleteFuente = async (req, res) => {
    try {
        const { id } = req.params;

        const fuente = await Fuente.findByPk(id);
        if (!fuente) {
            return res.status(404).json({ message: 'Fuente no encontrada' });
        }

        await fuente.destroy();
        res.json({ message: 'Fuente eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la fuente', error: error.message });
    }
};