import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Favorito = sequelize.define('Favorito', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_articulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_agregado: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, 
});

export default Favorito;