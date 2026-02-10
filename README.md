# Dentisur - Página Web Odontológica

Página web profesional para el consultorio odontológico Dentisur, desarrollada con Next.js y React.

## Características

- ✨ Diseño elegante y moderno
- 📱 Completamente responsive
- 🦷 Información sobre servicios odontológicos
- 📍 Sección de ubicación con mapa
- 💬 Integración con WhatsApp
- 🌍 Paquetes internacionales

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye para producción:
```bash
npm run build
```

## Tecnologías Utilizadas

- Next.js 14
- React 18
- CSS3
- Google Fonts (Poppins)

## Estructura del Proyecto

```
dentisur/
├── src/
│   ├── components/     (Navbar, Inicio, Servicios, Fotos, Ubicacion, etc.)
│   ├── pages/         (_app.js, index.js, agendar-cita.js, servicios/[servicioId].js)
│   ├── assets/images/
│   ├── App.css
│   └── index.css
├── public/             (images, robots.txt, sitemap.xml)
├── backend/            (NestJS, API citas)
├── functions/          (Firebase Cloud Functions, agendarCita)
├── next.config.js
├── firebase.json
└── package.json
```

## Backend y formulario de citas

- **Opción recomendada (sin costo extra):** El proyecto incluye una ruta API en Next.js (`/api/agendar-cita`) que envía el correo. En **Vercel** solo necesitas configurar las variables SMTP (ver `.env.example`). El formulario usará esta ruta por defecto y funcionará en PC y móviles.
- **Local con API integrada:** `npm run dev` y el formulario llama a `/api/agendar-cita`. Crea `.env.local` con las variables de `.env.example` (o `SKIP_EMAIL=true` para probar sin enviar correo).
- **Backend NestJS (opcional):** En `backend/` para desarrollo local en puerto 3003. Ver `backend/README.md`.
- **Firebase (opcional, plan de pago):** Ver **[FIREBASE-DEPLOY.md](./FIREBASE-DEPLOY.md)**.

## Contacto

WhatsApp: +57 319 399 7118 (debe coincidir con el número en `WhatsAppButton.jsx`, `Inicio.jsx`, `Servicios.jsx`, `PaquetesInternacionales.jsx`)


