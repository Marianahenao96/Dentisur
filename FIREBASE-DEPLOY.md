# Despliegue del backend en Firebase (Cloud Functions)

El backend de agendamiento de citas puede desplegarse en **Firebase Cloud Functions** para que el formulario funcione cuando el frontend está en Vercel u otro hosting.

## Requisitos

- Cuenta en [Firebase](https://console.firebase.google.com)
- **Plan Blaze** (pago por uso): necesario para que Cloud Functions puedan hacer peticiones externas (SMTP). El plan gratuito Spark no permite enviar correo.
- Node.js 18+
- Firebase CLI: `npm install -g firebase-tools`

## 1. Crear proyecto en Firebase

1. Entra en [Firebase Console](https://console.firebase.google.com).
2. **Crear proyecto** (o usa uno existente).
3. Anota el **ID del proyecto** (ej. `dentisur-xxxxx`).

## 2. Vincular el proyecto local

En la raíz del repositorio:

```bash
firebase login
firebase use --add
```

Elige el proyecto que creaste y asígnalo como `default`. Se actualizará `.firebaserc` con el ID del proyecto (o edita `.firebaserc` y pon `"default": "tu-id-de-proyecto"`).

## 3. Instalar dependencias de Functions

```bash
cd functions
npm install
cd ..
```

## 4. Configurar variables de entorno (SMTP) en Firebase

En producción las Cloud Functions usan variables de entorno definidas en Firebase.

1. En [Firebase Console](https://console.firebase.google.com) → tu proyecto → **Functions** (Build) → pestaña **Configuración** / **Environment variables** (o en Google Cloud Console).
2. Añade las variables (las mismas que en el backend NestJS):

| Nombre       | Valor (ejemplo)                          |
|-------------|-------------------------------------------|
| SMTP_HOST   | smtp.gmail.com                            |
| SMTP_PORT   | 587                                       |
| SMTP_SECURE | false                                     |
| SMTP_USER   | tu-correo@gmail.com                       |
| SMTP_PASS   | contraseña de aplicación (16 caracteres)  |
| SMTP_FROM   | "Dentisur Web" &lt;tu-correo@gmail.com&gt; |

Para Gmail: activa verificación en 2 pasos y crea una **contraseña de aplicación** en tu cuenta Google.

Opcional (solo pruebas, no envía correo):

| Nombre     | Valor     |
|------------|-----------|
| SKIP_EMAIL | true      |

**Desde la terminal** (alternativa):

```bash
firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="587" smtp.user="tu@gmail.com" smtp.pass="xxxx"
```

En Functions v2 se recomienda usar **Secret Manager** o las variables en la consola de Firebase/Google Cloud.

## 5. Desplegar solo Functions

En la raíz del proyecto:

```bash
firebase deploy --only functions
```

Al terminar verás la URL de la función, por ejemplo:

```
https://us-central1-tu-proyecto.cloudfunctions.net/agendarCita
```

Cópiala.

## 6. Conectar el frontend (Vercel u otro)

En el proyecto del **frontend** (Vercel):

1. **Settings** → **Environment Variables**.
2. Añade:
   - **Name:** `NEXT_PUBLIC_AGENDAR_CITA_URL`
   - **Value:** la URL de la función (ej. `https://us-central1-tu-proyecto.cloudfunctions.net/agendarCita`).
3. Redespliega el frontend para que tome la variable.

El formulario de citas enviará las peticiones a esa URL.

## Resumen de URLs

| Entorno        | Variable                      | Ejemplo                                                                 |
|----------------|-------------------------------|-------------------------------------------------------------------------|
| Local (NestJS) | No definir (usa 3003)         | `http://localhost:3003/citas/agendar`                                 |
| Producción     | `NEXT_PUBLIC_AGENDAR_CITA_URL`| `https://us-central1-tu-proyecto.cloudfunctions.net/agendarCita`        |

## Emulador local (opcional)

Para probar la función sin desplegar:

```bash
cd functions
# Crea .env desde .env.example y rellena SMTP o SKIP_EMAIL=true
firebase emulators:start --only functions
```

La URL local será algo como `http://127.0.0.1:5001/tu-proyecto/us-central1/agendarCita`. Puedes usar `NEXT_PUBLIC_AGENDAR_CITA_URL` con esa URL para probar en local.
