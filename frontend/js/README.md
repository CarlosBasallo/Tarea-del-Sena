Aplicación Web Funcional (Usuarios y Productos)
Aplicación full-stack con backend en Node.js/Express y frontend estático que consume la API para gestionar usuarios y productos. Incluye CRUD completo, conexión a MongoDB y un endpoint de salud. 
Requisitos
	•	Node.js 18+ y npm. 
	•	MongoDB en local (servicio activo en mongodb://localhost:27017). 
Estructura
	•	backend: API REST (Express, Mongoose, CORS, Dotenv). 
	•	frontend: HTML/CSS/JS con módulos, sin framework; consume la API vía fetch.
Configuración backend
	1.	Ir a la carpeta:
	•	cd backend 
	2.	Instalar dependencias:
	•	npm install 
	3.	Crear archivo .env:
	•	PORT=3000
	•	MONGO_URI=mongodb://localhost:27017/appdb 
	4.	Iniciar servidor:
	•	npm run dev 
	5.	Probar salud:
	•	Abrir http://localhost:3000/api/health y verificar ok:true. 
Ejecución frontend
	1.	Ir a la carpeta:
	•	cd frontend
	2.	Servir estáticos (elige una):
	•	python3 -m http.server 5500
	•	npx http-server -p 5500
	3.	Abrir la UI:
	•	http://localhost:5500/index.html
    Endpoints principales
	•	Usuarios:
	•	GET /api/users
	•	POST /api/users
	•	PUT /api/users/:id
	•	DELETE /api/users/:id 
	•	Productos:
	•	GET /api/products
	•	POST /api/products
	•	PUT /api/products/:id
	•	DELETE /api/products/:id 
	•	Salud:
	•	GET /api/health 
    Pruebas rápidas
	•	Crear usuario desde la UI (nombre, email, contraseña, role) y verificar en /api/users. 
	•	Crear producto (nombre, precio, descripción) y verificar en /api/products. 
	•	Eliminar desde la UI y confirmar que ya no aparece en los listados. 
Notas técnicas
	•	CORS está habilitado en el backend para permitir el frontend en http://localhost:5500. 
	•	BASE_URL del frontend apunta a http://localhost:3000/api en js/apiClient.js.
	•	No subir .env con credenciales reales; incluir .env.example con valores de muestra. 
    Scripts útiles
	•	Backend: npm run dev (nodemon) y npm start (node). 
	•	Frontend: python3 -m http.server 5500 (servidor estático).