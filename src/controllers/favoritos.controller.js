import Favorito from '../models/favoritos.model.js';

export const getFavoritos = async (req, res) => {
    try {
        const favoritos = await Favorito.findAll();
        res.json(favoritos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los favoritos', error: error.message });
    }
};

export const getFavoritoById = async (req, res) => {
    try {
        const { id } = req.params;
        const favorito = await Favorito.findByPk(id);
        if (!favorito) {
            return res.status(404).json({ message: 'Favorito no encontrado' });
        }
        res.json(favorito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el favorito', error: error.message });
    }
};
export const updateFavorito = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_usuario, id_articulo } = req.body;

       
        const favorito = await Favorito.findByPk(id);
        if (!favorito) {
            return res.status(404).json({ message: 'Favorito no encontrado' });
        }

        // Validar campos recibidos
        if (!id_usuario && !id_articulo) {
            return res.status(400).json({ message: 'Se debe proporcionar al menos un campo para actualizar' });
        }

        // Actualizar solo los campos proporcionados
        if (id_usuario) favorito.id_usuario = id_usuario;
        if (id_articulo) favorito.id_articulo = id_articulo;

        // Guardar cambios
        await favorito.save();
        
        res.json(favorito);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el favorito', error: error.message });
    }
};

export const createFavorito = async (req, res) => {
    try {
        const { id_usuario, id_articulo } = req.body;

        // Validación de campos obligatorios
        if (!id_usuario || !id_articulo) {
            return res.status(400).json({ message: 'Los campos id_usuario e id_articulo son obligatorios' });
        }

        const nuevoFavorito = await Favorito.create({
            id_usuario,
            id_articulo,
        });

        res.status(201).json(nuevoFavorito);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el favorito', error: error.message });
    }
};

export const deleteFavorito = async (req, res) => {
    try {
        const { id } = req.params;

        const favorito = await Favorito.findByPk(id);
        if (!favorito) {
            return res.status(404).json({ message: 'Favorito no encontrado' });
        }

        await favorito.destroy();
        res.json({ message: 'Favorito eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el favorito', error: error.message });
    }
};