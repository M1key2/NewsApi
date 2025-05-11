import Articulo from './articulos.model.js';
import Categoria from './categorias.model.js';
import Fuente from './fuentes.model.js';

 //Relación: Un artículo pertenece a una categoría
Articulo.belongsTo(Categoria, {
    foreignKey: 'id_categoria',
    as: 'categoria',
});

// Relación: Una categoría tiene muchos artículos
Categoria.hasMany(Articulo, {
    foreignKey: 'id_categoria',
    as: 'articulos',
});

// Relación: Un artículo pertenece a una fuente
Articulo.belongsTo(Fuente, {
    foreignKey: 'id_fuente',
    as: 'fuente',
});

// Relación: Una fuente tiene muchos artículos
Fuente.hasMany(Articulo, {
    foreignKey: 'id_fuente',
    as: 'articulos',
});