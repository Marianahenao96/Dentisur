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

El backend queda en **http://localhost:3001** por defecto.

## Endpoint

- **POST** `/citas/agendar`  
  Body (JSON): `nombre`, `email`, `telefono`, `fecha` (obligatorios); `hora`, `servicio`, `mensaje` (opcionales).  
  Envía un correo a rafadentisur@gmail.com con los datos de la solicitud de cita.

## Frontend

En la raíz del proyecto, el frontend Next.js usa la variable de entorno `NEXT_PUBLIC_API_URL` (por defecto `http://localhost:3001`). Para producción, créala apuntando a la URL de tu API.
