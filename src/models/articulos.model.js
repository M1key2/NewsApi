import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Articulo = sequelize.define('Articulo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_fuente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps:false,
});

export default Articulo;