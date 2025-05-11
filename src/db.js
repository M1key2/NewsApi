//import {createPool, format} from 'mysql2/promise';
import {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} from './config.js';
import { Sequelize } from 'sequelize';

//export const pool = createPool({
  //host: DB_HOST,
  //user: DB_USER,
  //password: DB_PASSWORD,
  //database: DB_NAME,
  //port: DB_PORT
//});
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

try{
  await sequelize.authenticate();
  console.log('Conexión a la base de datos establecida correctamente.');
}catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}
export default sequelize;