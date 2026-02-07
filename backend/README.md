# Backend Dentisur (NestJS)

API para agendamiento de citas. Envía notificaciones por correo a **rafadentisur@gmail.com** cuando un usuario envía el formulario.

## Requisitos

- Node.js 18+
- Cuenta de correo con SMTP (ej. Gmail con contraseña de aplicación)

## Instalación

```bash
cd backend
npm install
```

## Configuración del correo

1. Copia el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` con tus datos SMTP. Para **Gmail**:
   - Activa "Verificación en 2 pasos" en tu cuenta Google.
   - Crea una **contraseña de aplicación**: Cuenta Google → Seguridad → Contraseñas de aplicaciones.
   - En `.env`:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=tu-correo@gmail.com
     SMTP_PASS=la-contraseña-de-16-digitos
     SMTP_FROM="Dentisur Web" <tu-correo@gmail.com>
     ```

## Ejecución

- Desarrollo (con recarga):
  ```bash
  npm run start:dev
  ```
- Producción:
  ```bash
  npm run build
  npm run start:prod
  ```

El backend queda en **http://localhost:3003** por defecto.

## Despliegue del backend (producción)

**Vercel solo sirve para el frontend.** El backend NestJS debe desplegarse en un servicio que ejecute Node.js de forma continua. Opciones gratuitas o económicas:

### Opción 1: Railway (recomendado)

1. Entra en [railway.app](https://railway.app) y crea una cuenta.
2. **New Project** → **Deploy from GitHub repo** (conecta el repo donde está el backend).
3. En **Settings** del servicio:
   - **Root Directory**: pon `backend` (si el backend está en una carpeta `backend` del mismo repo que el frontend).
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
4. En **Variables** añade todas las de `.env`:
   - `CORS_ORIGIN`: URL del frontend, ej. `https://dentisur.site` (sin barra final).
   - `SMTP_*`, etc. (las mismas que en local).
5. Railway te dará una URL tipo `https://tu-proyecto.up.railway.app`. Úsala como API.

### Opción 2: Render

1. [render.com](https://render.com) → **New** → **Web Service**.
2. Conecta el repo y en **Root Directory** pon `backend`.
3. **Build**: `npm install && npm run build`  
   **Start**: `npm run start:prod`
4. Añade las variables de entorno (igual que arriba, incluyendo `CORS_ORIGIN` con la URL de Vercel).
5. Guarda; Render te dará una URL para la API.

### Después de desplegar el backend

En **Vercel** (proyecto del frontend):

1. **Settings** → **Environment Variables**
2. Añade: **Name** `NEXT_PUBLIC_API_URL`, **Value** la URL de tu backend (ej. `https://tu-proyecto.up.railway.app`).
3. Redespliega el frontend para que tome la nueva variable.

Así el formulario en Vercel llamará a tu API desplegada y CORS permitirá las peticiones desde tu dominio.

## Endpoint

- **POST** `/citas/agendar`  
  Body (JSON): `nombre`, `email`, `telefono`, `fecha` (obligatorios); `hora`, `servicio`, `mensaje` (opcionales).  
  Envía un correo a rafadentisur@gmail.com con los datos de la solicitud de cita.

## Frontend

En la raíz del proyecto, el frontend Next.js usa la variable de entorno `NEXT_PUBLIC_API_URL` (por defecto `http://localhost:3003`). Para producción, créala en Vercel apuntando a la URL de tu backend desplegado.
