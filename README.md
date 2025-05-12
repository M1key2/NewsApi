
# 📰 News API

API RESTful para la gestión de noticias, que permite manejar artículos, categorías, fuentes, usuarios y favoritos.

## 🚀 Tecnologías

- Node.js
- Express
- Sequelize (ORM)
- MySQL

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/news-api.git
cd news-api
```

2. Instala las dependencias:

```bash
npm install
```
3. Instalar express
   
```bash
npm install express
```

4. Instalar mysql
   
```bash
npm install --save mysql2
```

5. Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
PORT=3002
HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=nombre_de_la_base
```

6. Ejecuta la API en modo desarrollo:

```bash
npm run dev
```

---

## 🌐 URL Base

```
http://localhost:3002/api
```

**Formato de Respuesta:** JSON

---

## 📚 Endpoints

### 🔹 Artículos

- `GET /api/articulos` – Lista todos los artículos  
- `GET /api/articulos/:id` – Obtiene un artículo por ID  
- `POST /api/articulos` – Crea un nuevo artículo

```json
{
  "titulo": "Título del artículo",
  "contenido": "Contenido del artículo",
  "id_categoria": 1,
  "id_fuente": 1
}
```

- `PUT /api/articulos/:id` – Actualiza un artículo  
- `DELETE /api/articulos/:id` – Elimina un artículo

---

### 🔹 Categorías

- `GET /api/categorias` – Lista todas las categorías  
- `GET /api/categorias/:id` – Obtiene una categoría por ID  
- `POST /api/categorias` – Crea una nueva categoría

```json
{
  "nombre": "Nombre de la categoría",
  "descripcion": "Descripción opcional"
}
```

- `PUT /api/categorias/:id` – Actualiza una categoría  
- `DELETE /api/categorias/:id` – Elimina una categoría

---

### 🔹 Fuentes

- `GET /api/fuentes` – Lista todas las fuentes  
- `GET /api/fuentes/:id` – Obtiene una fuente por ID  
- `POST /api/fuentes` – Crea una nueva fuente

```json
{
  "nombre": "Nombre de la fuente",
  "url": "https://ejemplo.com"
}
```

- `PUT /api/fuentes/:id` – Actualiza una fuente  
- `DELETE /api/fuentes/:id` – Elimina una fuente

---

### 🔹 Usuarios

- `GET /api/usuarios` – Lista todos los usuarios  
- `GET /api/usuarios/:id` – Obtiene un usuario por ID  
- `POST /api/usuarios` – Crea un nuevo usuario

```json
{
  "nombre": "Nombre de usuario",
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
```

- `PUT /api/usuarios/:id` – Actualiza un usuario  
- `DELETE /api/usuarios/:id` – Elimina un usuario

---

### 🔹 Favoritos

- `GET /api/favoritos` – Lista todos los favoritos  
- `GET /api/favoritos/:id` – Obtiene un favorito por ID  
- `POST /api/favoritos` – Marca un artículo como favorito

```json
{
  "id_usuario": 1,
  "id_articulo": 1
}
```

- `PUT /api/favoritos/:id` – Actualiza un favorito  
- `DELETE /api/favoritos/:id` – Elimina un favorito

---


