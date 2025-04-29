import ArticulosModel from "../models/articulos.model.js";
  
export const getArticulos = async function(req, res){
try {
    const articulos = await ArticulosModel.getArticulos();
    res.json(articulos);
} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
}
export const getArticuloById = async (req, res) => {
    try {
      const { id } = req.params;
      const articulo = await ArticulosModel.getArticuloById(id); // Usa el método del modelo
      if (!articulo) {
        return res.status(404).json({ message: 'Artículo no encontrado' });
      }
      res.json(articulo);
    } catch (error) {
      console.error('Error en getArticuloById:', error); // Agrega esto para depurar
      res.status(500).json({ message: 'Error al obtener el artículo', error });
    }
  };
  
  // Insertar un nuevo artículo
  export const insertArticulo = async (req, res) => {
    try {
      const { titulo, contenido, id_categoria, id_fuente, fecha_publicacion } = req.body;
  
      // Validación de campos obligatorios
      if (!titulo || !id_categoria || !id_fuente || !fecha_publicacion) {
        return res.status(400).json({ message: 'Todos los campos obligatorios deben estar presentes' });
      }
  

  
      const nuevoArticulo = await ArticulosModel.insertArticulo({
        titulo,
        contenido,
        id_categoria,
        id_fuente,
        fecha_publicacion,
      });
  
      res.status(201).json(nuevoArticulo);
    } catch (error) {
      console.error('Error en insertArticulo (controlador):', error); // Registra el error completo
      res.status(500).json({ message: 'Error al insertar el artículo', error: error.message });
    }
  };