
# AppMobil (Amodrinks) 🎯

Aplicación de preguntas por categorías construida con **React Native (Expo)** y **Node.js**, conectada a una **base de datos MySQL** real.  
Ideal para romper el hielo en reuniones o convivencias, con categorías como **Chill**, **Citas** y **Hot**.

---

## 📲 Funcionalidades

- Registro y login de usuarios con validación desde backend.
- Almacenamiento de usuarios en base de datos MySQL.
- Selección de categoría de preguntas.
- Visualización de preguntas aleatorias usando una API real (`/questions/random`).
- Interfaz intuitiva, botones y navegación entre pantallas móviles.

---

## 🧱 Tecnologías utilizadas

### Frontend (Mobile):
- [Expo](https://expo.dev/)
- React Native
- TypeScript
- React Navigation

### Backend:
- Node.js
- Express
- JWT para autenticación
- Bcrypt para encriptación de contraseñas
- MySQL

---

## 🗃️ Estructura del Proyecto

```
AppComplete/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── mobile/
│   ├── src/
│   │   ├── Presentation/views/
│   │   ├── Components/
│   │   └── Navigation (Stack)
│   ├── App.tsx
│   └── assets/
│
├── database/
│   └── init.sql (estructura MySQL)
│
└── README.md
```

---

## 🚀 Cómo ejecutar el proyecto

### 🔹 Backend

```bash
cd backend
npm install
npm run start
```

El backend queda corriendo en: `http://localhost:3000/`  
Asegúrate de tener corriendo MySQL y haber ejecutado el archivo `init.sql`.

---

### 🔹 Frontend (Expo)

```bash
cd mobile
npm install
npx expo start
```

Puedes probar la app en un dispositivo móvil usando [Expo Go](https://expo.dev/client).

---

## 🔐 Seguridad

- Contraseñas cifradas con bcrypt.
- Autenticación mediante JSON Web Tokens (JWT).
- Manejo de errores controlado en el backend.
- Validaciones básicas de entrada de datos.

---

## 📌 Mejoras futuras

- Guardar historial de preguntas por usuario.
- Evitar repeticiones en preguntas.
- Agregar pantalla de perfil o configuración.
- Subir app a Play Store (versión beta con Expo).
- Migrar backend a Flask o Django (opcional).

---

## 🙋‍♀️ Autor

**Michelle / CanelayXD**

- GitHub: [CanelayXD](https://github.com/CanelayXD)
- Contacto: [Ana Michelle Capristo Zapiain LinkedIn](www.linkedin.com/in/ana-michelle-capristo-zapiain-1a67572ba)

---

## 🏁 Licencia

Este proyecto es de código abierto y lo puedes usar para aprendizaje o prácticas personales. ¡Pero dale crédito a la creadora si lo usas!
