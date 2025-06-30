# Práctica de Login Corporativo en React

Este proyecto es una práctica de autenticación de usuarios utilizando React, Tailwind CSS y React Router, conectado a una API externa real.

## Características principales
- Login corporativo moderno, responsivo y centrado en pantalla.
- Conexión a una API externa real para validar credenciales.
- Manejo de respuestas de la API: mensajes claros de error o éxito.
- Almacenamiento de datos de usuario en localStorage tras login exitoso.
- Rutas protegidas con React Router.
- Uso de variables de entorno para la URL de la API.
- Diseño profesional con Tailwind CSS.

## ¿Cómo funciona?
1. El usuario ingresa sus credenciales en el formulario de login.
2. Se envían a la API externa definida en `.env` (`VITE_API_URL`).
3. Si la API responde con datos válidos, se guarda el usuario y se redirige a la ruta protegida `/home`.
4. Si hay error, se muestra un mensaje claro en pantalla.

## Configuración
1. Clona el repositorio.
2. Instala dependencias con `npm install`.
3. Crea un archivo `.env` con la variable `VITE_API_URL` apuntando a la API.
4. Ejecuta el proyecto con `npm run dev`.

---

Esta práctica es ideal para aprender integración de login real en React con buenas prácticas de UI y manejo de rutas protegidas.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
