import ArticulosModel from '../models/articulos.model.js';


export const getArticulos = async (req, res) => {
  const articulos = await ArticulosModel.findAll();
  res.json(articulos);
};

export const getArticuloById = async (req, res) => {
  try {
      const { id } = req.params;
      const articulo = await ArticulosModel.findByPk(id);
      if (!articulo) {
          return res.status(404).send({ message: 'Artículo no encontrado' });
      }
      res.json(articulo);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener el artículo', error: error.message });
  }
};
export const createArticulo = async (req, res) => {
  const { titulo, contenido, id_categoria, id_fuente, fecha_publicacion } = req.body;
  const articulo = await ArticulosModel.create({
    titulo,
    contenido,
    id_categoria,
    id_fuente,
    fecha_publicacion
  });
  res.json(articulo);
}
export const updateArticulo = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, id_categoria, id_fuente, fecha_publicacion } = req.body;
  const articulo = await ArticulosModel.findByPk(id);
  if (!articulo) {
    return res.status(404).send({ message: 'Artículo no encontrado' });
  }
  articulo.titulo = titulo;
  articulo.contenido = contenido;
  articulo.id_categoria = id_categoria;
  articulo.id_fuente = id_fuente;
  articulo.fecha_publicacion = fecha_publicacion;
  await articulo.save();
  res.json(articulo);
}
export const deleteArticulo = async (req, res) => {
  const { id } = req.params;
  const articulo = await ArticulosModel.findByPk(id);
  if (!articulo) {
    return res.status(404).send({ message: 'Artículo no encontrado' });
  }
  await articulo.destroy();
  res.send({ message: 'Artículo eliminado correctamente' });
}

