import { pool } from '../db.js';

class ArticulosModel {
  // Obtener todos los artículos
  static async getArticulos() {
    const [rows] = await pool.query('SELECT * FROM articulos');
    return rows;
  }

  // Obtener un artículo por ID
  static async getArticuloById(id) {
    try {
      const [rows] = await pool.query('SELECT * FROM articulos WHERE id = ?', [id]);
      return rows[0]; 
    } catch (error) {
      console.error('Error en getArticuloById (modelo):', error); 
      throw error;
    }
  }

  // Insertar un nuevo artículo
  static async insertArticulo({ titulo, contenido, id_categoria, id_fuente, fecha_publicacion }) {
    try {
      const [result] = await pool.query(
        'INSERT INTO articulos (titulo, contenido, id_categoria, id_fuente, fecha_publicacion) VALUES (?, ?, ?, ?, ?)',
        [titulo, contenido, id_categoria, id_fuente, fecha_publicacion]
      );
      return {
        id: result.insertId,
        titulo,
        contenido,
        id_categoria,
        id_fuente,
        fecha_publicacion,
      };
    } catch (error) {
      console.error('Error en insertArticulo (modelo):', error); 
      throw error;
    }
  }
  
  }

export default ArticulosModel;